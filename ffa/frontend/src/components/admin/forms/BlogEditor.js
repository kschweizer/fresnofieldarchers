import React, { useEffect, useState } from 'react';
import { addBlogpost, getBlogpost } from '../../../actions/blogposts';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function BlogEditor(props) {
    const [text, setText] = useState('');
    
    const handleChange = (val) => {
        setText(val);
    }

    const onSubmit = () => {
        let blogpost = { subject : 'randomshit', message : text };
        props.addBlogpost(blogpost);
        setText('')
    }

    return (
        <div>
            <h3>Write new blogpost:</h3>
            <ReactQuill className="custom-quill" theme="snow" value={text} onChange={handleChange} />
            <button className="btn btn-success" onClick={onSubmit}>Submit</button>
        </div>
    )
}

const mapStateToProps = state => ({
    blogpost : state.blogposts.blogpost
})

export default connect(mapStateToProps, { addBlogpost, getBlogpost })(BlogEditor);
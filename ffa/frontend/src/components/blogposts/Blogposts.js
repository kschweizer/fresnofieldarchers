import React, { useEffect, useState} from 'react';
import './Blogposts.scss';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';


function Blogposts() {

    const [page, setPage] = useState(1);
    const [previous, setPrevious] = useState(null);
    const [next, setNext] = useState(null);
    const [post1, setPost1] = useState(null);
    const [post2, setPost2] = useState(null);
    const [post3, setPost3] = useState(null);
    const [post4, setPost4] = useState(null);
    const [post5, setPost5] = useState(null);
    
    function getBlogposts(page_num) {
        axios.get(`/api/webapp/blogposts/?page=${page_num}`).then(res => {
            let results = res.data['results'];
            setPrevious(res.data['previous']);
            setNext(res.data['next']);
            results[0] ? (setPost1(results[0])) : setPost1(null);
            results[1] ? (setPost2(results[1])) : setPost2(null);
            results[2] ? (setPost3(results[2])) : setPost3(null);
            results[3] ? (setPost4(results[3])) : setPost4(null);
            results[4] ? (setPost5(results[4])) : setPost5(null);
        });
    }

    useEffect(() => {
        getBlogposts(page);
    }, []);

    const nextPage = e => {
        let newPage = page + 1;
        setPage(newPage);
        getBlogposts(newPage);
    };

    const prevPage = e => {
        let newPage = page - 1;
        setPage(newPage);
        getBlogposts(newPage);
    };

    return (
        <div className="blog-container">
            { post1 ? (
                <article key={post1.id} className="blogpost">
                <h5 className="blog-date">{post1.date}</h5>
                <ReactQuill className="custom-quill-public" theme="snow" value={post1.message} readOnly={true} modules={{ toolbar : false }} preserveWhitespace={true} />
            </article>
            ) : null }
            { post2 ? (
                <article key={post2.id} className="blogpost">
                <h5 className="blog-date">{post2.date}</h5>
                <ReactQuill className="custom-quill-public" theme="snow" value={post2.message} readOnly={true} modules={{ toolbar : false }} preserveWhitespace={true} />
            </article>
            ) : null }
            { post3 ? (
                <article key={post3.id} className="blogpost">
                <h5 className="blog-date">{post3.date}</h5>
                <ReactQuill className="custom-quill-public" theme="snow" value={post3.message} readOnly={true} modules={{ toolbar : false }} preserveWhitespace={true} />
            </article>
            ) : null }
            { post4 ? (
                <article key={post4.id} className="blogpost">
                <h5 className="blog-date">{post4.date}</h5>
                <ReactQuill className="custom-quill-public" theme="snow" value={post4.message} readOnly={true} modules={{ toolbar : false }} preserveWhitespace={true} />
            </article>
            ) : null }
            { post5 ? (
                <article key={post5.id} className="blogpost">
                <h5 className="blog-date">{post5.date}</h5>
                <ReactQuill className="custom-quill-public" theme="snow" value={post5.message} readOnly={true} modules={{ toolbar : false }} preserveWhitespace={true} />
            </article>
            ) : null }
            
            { previous !== null &&
                <button className="blog-button btn btn-primary btn-sm" onClick={prevPage}>PREVIOUS</button>
            }

            
            { next !== null && 
                <button className="blog-button btn btn-primary btn-sm" onClick={nextPage}>NEXT</button> 
            }
        </div>
    );
}

export default Blogposts;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBlogpost } from '../../actions/blogposts';


export class Blogform extends Component {
    state = {
        subject: "",
        message: ""
    };

    static propTypes = {
        addBlogpost: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onKeyDown = e => {
        if (e.keyCode== 9) {
            e.preventDefault();
        }

    }

    onSubmit = e => {
        e.preventDefault();
        const { subject, message } = this.state;
        const blogpost = { subject, message };
        this.props.addBlogpost(blogpost);
    };

    render() {
        const { subject, message } = this.state;
        return (
            <div id="blogform">
                <div className="card card-body bg-secondary mt-4 mb-4">
                    <h2>Add Newspost</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Subject</label>
                            <input
                                className="form-control"
                                type="text"
                                name="subject"
                                onChange={this.onChange}
                                value={subject}
                            />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                className="form-control"
                                type="text"
                                name="message"
                                onKeyDown={this.onKeyDown}
                                onChange={this.onChange}
                                value={message}
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>                
                </div>
            </div>
        );
    }
}

export default connect(null, {addBlogpost})(Blogform);

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBlogposts, deleteBlogpost } from '../../actions/blogposts';
import './Blogposts.scss';

export class Blogposts extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        blogposts: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getBlogposts(1);
    }

    render() {
        const {isAuthenticated} = this.props.auth;
        return (
            <div className="blog-container">
                { this.props.blogposts.map(blogpost => (
                    <article className="blogpost">
                        <h2 className="blog-title">{blogpost.subject}</h2>
                        <h5 className="blog-date">{blogpost.date}</h5>
                        <p className="blog-body">{blogpost.message}</p>
                        {isAuthenticated? <button className="btn btn-danger btn-sm" onClick={this.props.deleteBlogpost.bind(this, blogpost.id)}>Delete</button> : null}
                    </article>
                ))}
                { this.props.previous !== null &&
                    <button className="blog-button btn btn-primary btn-sm" onClick={this.prevPage}>PREVIOUS</button>
                }

                
                { this.props.next !== null && 
                    <button className="blog-button btn btn-primary btn-sm" onClick={this.nextPage}>NEXT</button> 
                }
            </div>
        );
    }

    nextPage = e => {
        const current = this.props.current + 1;
        console.log(current);
        this.props.getBlogposts(current);
    }

    prevPage = e => {
        const current = this.props.current - 1;
        console.log(current);
        this.props.getBlogposts(current);
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    blogposts: state.blogposts.blogposts,
    next: state.blogposts.next,
    previous: state.blogposts.previous,
    current: state.blogposts.current
});

export default connect(mapStateToProps, { getBlogposts, deleteBlogpost })(Blogposts);

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBlogposts, deleteBlogpost } from '../../actions/blogposts';

import './Blogposts.css';

export class Blogposts extends Component {
    static propTypes = {
        blogposts: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getBlogposts(1);
    }

    render() {
        return (
            <Fragment>
                <h1 className="blog-header"><a id="newsletter"></a>Newsletters</h1>
                <div className="blog-container">
                    { this.props.blogposts.map(blogpost => (
                        <div className="blogpost">
                            <h2 className="blog-title">{blogpost.subject}</h2>
                            <h5 className="blog-date">{blogpost.date}</h5>
                            <p className="blog-body">{blogpost.message}</p>
                            <button className="btn btn-danger btn-sm" onClick={this.props.deleteBlogpost.bind(this, blogpost.id)}>Delete</button>
                        </div>
                    ))}
                    { this.props.previous !== null &&
                        <a href="#newsletter"><button className="btn btn-primary btn-sm" onClick={this.prevPage}>PREVIOUS</button></a>
                    }

                    
                    { this.props.next !== null && 
                        <a href="#newsletter"><button className="btn btn-primary btn-sm" onClick={this.nextPage}>NEXT</button></a>   
                    }
                </div>
            </Fragment>
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
    blogposts: state.blogposts.blogposts,
    next: state.blogposts.next,
    previous: state.blogposts.previous,
    current: state.blogposts.current
});

export default connect(mapStateToProps, { getBlogposts, deleteBlogpost })(Blogposts);

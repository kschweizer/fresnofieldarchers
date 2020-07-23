import axios from 'axios';
import { createMessage } from './messages';

import { GET_BLOGPOSTS, DELETE_BLOGPOST, ADD_BLOGPOST, GET_ERRORS } from './types';

// GET BLOGPOSTS
export const getBlogposts = (page)=> dispatch => {
    axios
        .get(`/api/webapp/blogposts/?page=${page}`)
        .then(res => {
            dispatch({
                type: GET_BLOGPOSTS,
                payload: res.data['results'],
                next: res.data['next'],
                previous: res.data['previous'],
                current: page
            });
        }).catch(err => console.log(err));
};

// DELETE BLOGPOSTS
export const deleteBlogpost = (id)=> dispatch => {
    axios
        .delete(`/api/webapp/blogposts/${id}`)
        .then(res => {
            dispatch(createMessage({ blogpostDeleted: "Post Deleted" }));
            dispatch({
                type: DELETE_BLOGPOST,
                payload: id
            });
        })
};

// ADD BLOGPOSTS
export const addBlogpost = (blogpost)=> dispatch => {
    axios
        .post('/api/webapp/blogposts/', blogpost)
        .then(res => {
            dispatch(createMessage({ blogpostAdded: "Post Added" }));
            dispatch({
                type: ADD_BLOGPOST,
                payload: res.data
            });
        })
        .catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            };
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        });
};
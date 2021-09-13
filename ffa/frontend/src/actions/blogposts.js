import axios from 'axios';
import { createMessage } from './messages';
import { tokenConfig } from './auth';

import { GET_BLOGPOSTS, GET_BLOGPOST, DELETE_BLOGPOST, ADD_BLOGPOST, GET_ERRORS } from './types';

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

export const getBlogpost = (id) => (dispatch => {
    axios
        .get(`/api/webapp/blogposts/id/`)
        .then(res => {
            dispatch({
                type: GET_BLOGPOST,
                payload: res.data
            })
        })
})

// DELETE BLOGPOSTS
export const deleteBlogpost = (id) => (dispatch, getState) => {
    axios
        .delete(`/api/webapp/blogposts/${id}`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ blogpostDeleted: "Post Deleted" }));
            dispatch({
                type: DELETE_BLOGPOST,
                payload: id
            });
        })
};

// ADD BLOGPOSTS
export const addBlogpost = (blogpost)=> (dispatch, getState) => {
    axios
        .post('/api/webapp/blogposts/', blogpost, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ blogpostAdded: "Post Added" }));
            dispatch({
                type: ADD_BLOGPOST,
                payload: res.data
            });
            window.location.href = ('/editor');
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
import axios from 'axios';

import { GET_BLOGPOSTS, DELETE_BLOGPOST, ADD_BLOGPOST, GET_BLOGPOSTSPAGE } from './types';

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
            dispatch({
                type: ADD_BLOGPOST,
                payload: res.data
            });
        }).catch(err => console.log(err));
};
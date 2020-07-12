import axios from 'axios';

import { GET_PHOTOS, ADD_PHOTO } from './types';

// GET PHOTOS
export const getPhotos = ()=> dispatch => {
    axios
        .get(`/api/webapp/photos/`)
        .then(res => {
            dispatch({
                type: GET_PHOTOS,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

// ADD PHOTO
export const addPhoto = (photo)=> dispatch => {
    axios
        .post('/api/webapp/photos/', photo, {
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': 'multipart/form-data',
            }
        })
        .then(res => {
            dispatch({
                type: ADD_PHOTO,
                payload: res.data
            });
        }).catch(err => console.log(err));
};
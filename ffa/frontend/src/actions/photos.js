import axios from 'axios';
import { createMessage } from './messages';

import { GET_PHOTOS, ADD_PHOTO } from './types';
import { tokenConfig } from './auth';

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
export const addPhoto = (photo, current, total)=> (dispatch, getState) => {
    axios
        .post('/api/webapp/photos/', photo, tokenConfig(getState))
            .then(res => {
                dispatch(createMessage({ photoAdded: `Photos Added: ${current}/${total}` }));
                dispatch({
                    type: ADD_PHOTO,
                    payload: res.data
                });
            })
            .catch(err => console.log(err));
};

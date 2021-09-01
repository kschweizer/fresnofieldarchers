import axios from 'axios';
import { createMessage } from './messages';

import { GET_PHOTOS, ADD_PHOTO, ADD_ALBUM, GET_ALBUMS, GET_ALBUM, DELETE_ALBUM, DELETE_PHOTO } from './types';
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
export const addPhoto = (photo)=> (dispatch, getState) => {
    axios
        .post('/api/webapp/photos/', photo, tokenConfig(getState))
            .then(res => {
                dispatch(createMessage({photoAdded: 'Upload success'}));
                dispatch({
                    type: ADD_PHOTO,
                    payload: res.data
                });
            })
            .catch(err => console.log(err));
};

// DELETE PHOTO
export const deletePhoto = (id)=> (dispatch, getState) => {
    axios
        .delete(`/api/webapp/photos/${id}`, tokenConfig(getState))
            .then(res => {
                dispatch(createMessage({photoDeleted: 'Photo deleted'}));
                dispatch({
                    type: DELETE_PHOTO,
                    payload: res.data
                });
            })
            .catch(err => console.log(err));
};

// CREATE ALBUM
export const addAlbum = (album)=> (dispatch, getState) => {
    axios
        .post('/api/webapp/albums/', album, tokenConfig(getState))
            .then(res => {
                dispatch({
                    type: ADD_ALBUM,
                    payload: res.data
                });
            })
            .catch(err => console.log(err));
};

export const getAlbums = ()=> dispatch => {
    axios
        .get(`/api/webapp/albums/`)
        .then(res => {
            dispatch({
                type: GET_ALBUMS,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

export const getAlbum = (id)=> dispatch => {
    axios
        .get(`/api/webapp/albums/${id}`)
        .then(res => {
            dispatch({
                type: GET_ALBUM,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

export const deleteAlbum = (id)=> (dispatch, getState) => {
    axios
        .delete(`/api/webapp/albums/${id}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: DELETE_ALBUM,
                payload: res.data
            });
        }).catch(err => console.log(err));
};
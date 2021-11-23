import { GET_PHOTOS, ADD_PHOTO, ADD_ALBUM, GET_ALBUMS, GET_ALBUM, DELETE_ALBUM, DELETE_PHOTO } from '../actions/types.js';

const initialState = {
    photos: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_PHOTOS:
            return {
                ...state,
                photos: action.payload
            };
        case ADD_PHOTO:
        case ADD_ALBUM:
            return state;
        case GET_ALBUMS:
            return {
                ...state,
                albums: action.payload
            }
        case GET_ALBUM:
            return {
                ...state,
                album: action.payload
            }
        case DELETE_ALBUM:
        case DELETE_PHOTO:
        default:
            return state;
    }
}
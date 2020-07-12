import { GET_PHOTOS, ADD_PHOTO } from '../actions/types.js';

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
            return {
                ...state,
                photos: [action.payload, ...state.photos]
            };
        default:
            return state;
    }
}
import { GET_BLOGPOSTS, DELETE_BLOGPOST, ADD_BLOGPOST } from '../actions/types.js';

const initialState = {
    blogposts: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_BLOGPOSTS:
            return {
                ...state,
                blogposts: action.payload,
                next: action.next,
                previous: action.previous,
                current: action.current
            };
        case DELETE_BLOGPOST:
            return {
                ...state,
                blogposts: state.blogposts.filter(blogpost => blogpost.id != action.payload)
            };
        case ADD_BLOGPOST:
            return {
                ...state,
                blogposts: [action.payload, ...state.blogposts]
            };
        default:
            return state;
    }
}
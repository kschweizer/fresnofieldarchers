import { combineReducers } from 'redux';
import blogposts from './blogposts';
import photos from './photos';

export default combineReducers({
    blogposts,
    photos
});
import { combineReducers } from 'redux';
import blogposts from './blogposts';
import photos from './photos';
import errors from './errors';
import messages from './messages';

export default combineReducers({
    blogposts,
    photos,
    errors,
    messages
});
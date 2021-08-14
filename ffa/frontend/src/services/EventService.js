import axios from 'axios';
import { tokenConfig } from '../actions/auth';
import store from '../store';

export default class EventService {

    getEvents() {
        return axios.get('/api/webapp/events').then(res => res.data);
    }

    postEvent(data) {
        return axios.post('/api/webapp/events/', data, tokenConfig(store.getState)).then(res => res.data);
    }

    deleteEvent(event, data) {
        return axios.delete(`/api/webapp/events/${event}`, data, tokenConfig(store.getState)).then(res => res.data);
    }
}
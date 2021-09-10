import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { tokenConfig } from '../../../actions/auth';
import { createMessage } from '../../../actions/messages';
import store from '../../../store';

export default function About() {
    const [number, setNumber] = useState(null);
    const [pitch, setPitch] = useState(null);
    const [info, setInfo] = useState(null);
    const [history, setHistory] = useState(null);

    useEffect(() => {
        axios.get('/api/webapp/about/1/').then(res => {
            let data = res.data;
            setNumber(data.number);
            setPitch(data.pitch);
            setInfo(data.info);
            setHistory(data.history);
        })
    }, [])

    const handleNumberChange = (e) => {
        setNumber(e.target.value);
    };

    const handlePitchChange = (val) => {
        setPitch(val);
    };

    const handleInfoChange = (val) => {
        setInfo(val);
    };

    const handleHistoryChange = (val) => {
        setHistory(val);
    };

    const onSubmit = () => {
        let about = { number : number, pitch : pitch, info : info, history : history };
        axios.patch('/api/webapp/about/1/', about, tokenConfig(store.getState)).then(res => {
            let data = res.data;
            setNumber(data.number);
            setPitch(data.pitch);
            setInfo(data.info);
            setHistory(data.history);
            store.dispatch(createMessage({aboutInfoUpdated : 'About Changes Uploaded'}));
        });
    }


    return (
        <div>
            <h3>Interested in Joining?</h3>
            { pitch ? (<ReactQuill className="custom-quill" theme="snow" preserveWhitespace={true} value={pitch} onChange={handlePitchChange} />) : null }

            <h3>Club Information</h3>
            { info ? (<ReactQuill className="custom-quill" theme="snow" preserveWhitespace={true} value={info} onChange={handleInfoChange} />) : null }

            <h3>Contact number</h3>
            { number ? (<input value={number} onChange={handleNumberChange}></input>) : null }

            <h3>Club History</h3>
            { history ? (<ReactQuill className="custom-quill" theme="snow" preserveWhitespace={true} value={history} onChange={handleHistoryChange} />) : null }

            <button className="btn btn-success" onClick={onSubmit}>Submit</button>
        </div>
    )
}

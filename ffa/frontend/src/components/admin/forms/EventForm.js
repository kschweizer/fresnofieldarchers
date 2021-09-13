import React, { useState, useRef, useEffect } from 'react';
import { Redirect } from 'react-router';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import EventService from '../../../services/EventService';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Eventform() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [flyer, setFlyer] = useState('');
    const [fileFlag, setFileFlag] = useState(false);
    const [eventText, setEventText] = useState('');
    const eventService = new EventService();

    useEffect(() => {
        eventService.getPinnedEvent().then(data => {
            console.log(data)
            setEventText(data.text);
        });
    }, []) 

    const handleChange = (val) => {
        setEventText(val);
    }

    const submitPinnedText = () => {
        let data = { text : eventText };
        eventService.patchPinnedEvent(data);
    }

    function handleUpload(e) {
        const inFile = e.target.files[0];
        if (inFile == null) {
            setFileFlag(false);
            return;
        }
        const fileName = inFile.name;
        const dotIdx = fileName.lastIndexOf('.');
        const ext = fileName.substring(dotIdx + 1);
        if (ext == 'pdf') {
            setFileFlag(false);
            setFlyer(e.target.files[0]);
        } else {
            console.log('file must be of type: pdf');
            setFileFlag(true);
        }
        
    } 

    const onSubmit = () => {
        let data = new FormData();
        data.append(`name`, name);
        data.append(`description`, description);
        data.append(`date`, date);
        data.append(`flyer`, flyer);
        eventService.postEvent(data).then(res => window.location.href = (`/editor/events?event=${res.pk}`));
    };

    return (
        <div>
            <h3>Edit Pinned Event Information:</h3>
            <ReactQuill className="custom-quill" theme="snow" value={eventText} onChange={handleChange} preserveWhitespace={true} />
            <button className="btn btn-success" onClick={submitPinnedText}>Update</button>
            <div className="card bg-danger">
                <h3 style={{borderBottom : '2px solid #fff'}}>Register New Event</h3>
                <h5>(* field is required)</h5>
                <h4>*Event Name</h4>
                <InputText value={name} onChange={(e) => setName(e.target.value)} style={{marginBottom : '5px'}}/>
                <h4>Event Description</h4>
                <InputTextarea value={description} onChange={(e) => setDescription(e.target.value)} style={{marginBottom : '5px'}}/>
                <h4>*Dates</h4>
                <Calendar selectionMode="range" value={date} onChange={(e) => setDate(e.value)} readOnlyInput />
                <div style={{marginTop : '5px'}}>
                    <h4>Event Flyer</h4>
                    <input type="file" onChange={handleUpload} />
                    {fileFlag ? (<h5 style={{color : 'orange'}}><i className="pi pi-exclamation-triangle"></i>FLYER MUST BE A '.pdf' FILE </h5>) : (null)}
                </div>
                <div style={{marginLeft : "auto", marginRight : "auto"}}>
                    <Button label="Submit" className="p-button-success" onClick={onSubmit}/>
                </div>
            </div>
        </div>
    );
};

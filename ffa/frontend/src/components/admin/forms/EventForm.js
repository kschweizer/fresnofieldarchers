import React, { useState, useRef } from 'react';
import { Redirect } from 'react-router';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import EventService from '../../../services/EventService';
import Events from '../components/Events';

export default function Eventform() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [flyer, setFlyer] = useState('');
    const [fileFlag, setFileFlag] = useState(false);
    const eventService = new EventService();


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
            <div className="card bg-danger">
                <h3 style={{borderBottom : '2px solid #fff'}}>Register New Event</h3>
                <h5>(* field is required)</h5>
                <InputText value={name} onChange={(e) => setName(e.target.value)} placeholder="*Event Name" style={{marginBottom : '5px'}}/>
                <InputTextarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Event Details" style={{marginBottom : '5px'}}/>
                <Calendar selectionMode="range" value={date} onChange={(e) => setDate(e.value)} placeholder="*Dates" readOnlyInput />
                <div style={{backgroundColor : '#111', marginTop : '5px'}}>
                    <h5>Event Flyer</h5>
                    <input type="file" onChange={handleUpload} />
                    {fileFlag ? (<h5 style={{color : 'orange'}}><i className="pi pi-exclamation-triangle"></i>FLYER MUST BE A '.pdf' FILE </h5>) : (null)}
                </div>
                <div style={{marginLeft : "auto", marginRight : "auto"}}>
                    <Button label="Submit" className="p-button-success" onClick={onSubmit}/>
                </div>
            </div>
            <Events />
        </div>
    );
};

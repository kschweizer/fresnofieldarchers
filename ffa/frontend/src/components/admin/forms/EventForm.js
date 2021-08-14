import React, { useState, useRef } from 'react';
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
    const eventService = new EventService();

    function handleUpload(e) {
        const inFile = e.target.files[0];
        const fileName = inFile.name;
        const dotIdx = fileName.lastIndexOf('.');
        const ext = fileName.substring(dotIdx + 1);
        if (ext == 'pdf') {
            setFlyer(e.target.files[0]);
        } else {
            console.log('file must be a pdf');
        }
        
    } 

    const onSubmit = () => {
        let data = new FormData();
        data.append(`name`, name);
        data.append(`description`, description);
        data.append(`date`, date);
        data.append(`flyer`, flyer);
        eventService.postEvent(data);
    };

    return (
        <div>
            <div className="card">
                <h5>Register New Event</h5>
                <InputText value={name} onChange={(e) => setName(e.target.value)} placeholder="Event Name" />
                <InputTextarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Event Details" />
                <Calendar id="multiple" value={date} onChange={(e) => setDate(e.value)} placeholder="Dates" readOnlyInput />
                <input type="file" onChange={handleUpload} />
                <div style={{marginLeft : "auto", marginRight : "auto"}}>
                    <Button label="Submit" className="p-button-success" onClick={onSubmit}/>
                </div>
            </div>
            <Events />
        </div>
    );
};

import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import EventService from '../../services/EventService';

import './Events.scss';

const Events = () => {
    const [events, setEvents] = useState([]);
    const eventService = new EventService();

    useEffect(() => {
        eventService.getEvents().then(data => setEvents(data));
    }, []); 

    const imageBodyTemplate = (rowData) => {
        console.log(rowData);
        return <img src={rowData.flyer_thumbnail} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} />;
    }

    const scoresBodyTemplate = (rowData) => {
        return (
            rowData.scores ? (
                <div>{rowData.scores}</div>
            ) : (
                <div>Scores Pending...</div>
            )
        );
    };

    return (
        <div className="container-lg events">
            <div className="event-header">
                <h1 className="event-title">Events</h1>
            </div>
            <DataTable value={events}>
                <Column field="name" header="Name"></Column>
                <Column field="description" header="Description"></Column>
                <Column field="date" header="Date"></Column>
                <Column field="flyer_thumbnail" header="Flyer" body={imageBodyTemplate}></Column>
                <Column field="scores" header="Scores" body={scoresBodyTemplate}></Column>
            </DataTable>
        </div>
    )
}

export default Events;

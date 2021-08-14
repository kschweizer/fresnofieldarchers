import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import EventService from "../../../services/EventService";

export default function events() {
    const [events, setEvents] = useState([]);
    const eventService = new EventService();

    useEffect(() => {
        eventService.getEvents().then(data => setEvents(data));
    }, []); 

    const imageBodyTemplate = (rowData) => {
        return (
            <img src={rowData.flyer_thumbnail} onError={(e) => e.target.src='/static/placeholder.jpg'} alt={rowData.image} />
        );
    };

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
        <div className="events">
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

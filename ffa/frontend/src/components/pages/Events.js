import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Link, useLocation } from 'react-router-dom';
import { Column } from 'primereact/column';
import EventService from '../../services/EventService';
import Event from './Event';

import './Events.scss';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Events = () => {
    const [events, setEvents] = useState([]);
    const eventService = new EventService();

    let location = useLocation();
    let query = useQuery();

    useEffect(() => {
        eventService.getEvents().then(data => setEvents(data));
    }, []); 

    const nameBodyTemplate = (rowData) => {
        const eventID = rowData.id;
        const eventName = rowData.name;
        return <Link to={`/events?event=${eventID}`}>{eventName}</Link>;
    }
    

    return (
            <div className="container-lg events">
                {query.get("event") ? (
                    null
                ) : (
                    <div>
                        <div className="event-header">
                            <h1 className="event-title">Events</h1>
                        </div>
                        <DataTable value={events} stripedRows>
                            <Column field="name" header="Event Name" body={nameBodyTemplate}></Column>
                            <Column field="format_date" header="Date"></Column>
                        </DataTable>
                    </div>
                )}
                <Event event_id={query.get("event")} />
            </div>
        
    )
}

export default Events;

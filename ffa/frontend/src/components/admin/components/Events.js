import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import EventService from '../../../services/EventService';
import Event from './Event';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import EventForm from '../forms/EventForm';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function events() {
    const [events, setEvents] = useState([]);
    const [visible, setVisible] = useState(false);
    const [selection, setSelection] = useState(null);
    const eventService = new EventService();

    const toast = useRef(null);
    let query = useQuery();
    


    useEffect(() => {
        eventService.getEvents().then(data => setEvents(data));
    }, []); 

    const accept = (event_id) => {
        eventService.deleteEvent(event_id).then(res => eventService.getEvents().then(data => setEvents(data)));
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'info', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const deleteButtonTemplate = (rowData) => {
        let event = rowData.id;
        return (
            event ? (
                <> 
                <ConfirmDialog visible={visible && selection == event} onHide={() => {setSelection(null); setVisible(false);}} message="Are you sure you want to delete this record?"
                                        header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept.bind(this, event)} reject={reject} />
                <Button onClick={() => {setSelection(event); setVisible(true);}} icon="pi pi-times" label="Delete" />
                </>
            ) : (
                null
            )
        )
    }

    const nameBodyTemplate = (rowData) => {
        const eventID = rowData.id;
        const eventName = rowData.name;
        return <Link to={`/editor/events?event=${eventID}`}>{eventName}</Link>;
    }



    return (
        <div className="container-lg events">
            <EventForm />
            <Toast ref={toast}/>
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
                            <Column field="delete" body={deleteButtonTemplate}></Column>
                        </DataTable>
                    </div>
                )}
                <Event event_id={query.get("event")} />
            </div>
    )
}

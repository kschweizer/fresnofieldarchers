import React, { useState, useEffect } from 'react';
import EventService from '../../services/EventService';
import { Document, Page, pdfjs } from 'react-pdf';
import './Events.scss';

export default function Event(props) {
    const [event, setEvent] = useState(null)
    const eventService = new EventService();
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [width, setWidth] = useState(window.innerWidth);
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    useEffect(() => {
        if (props.event_id) {
            eventService.getEvent(props.event_id).then(data => setEvent(data))
        }
    }, [props.event_id])

    const handleResize = () => {
        setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const eventTemplate = (eventData) => {
        const eventName = eventData.name;
        const eventDate = eventData.format_date;
        const eventDescription = eventData.description;
        const eventFlyer = eventData.flyer;
        const eventFlyerThumbnail = eventData.flyer_thumbnail;
        const eventScores = eventData.scores;

        return (
            <div>
                <div className="event-header">
                    <h3 className="event-title">{eventName}</h3>
                </div>
                <h5>{eventDate}</h5>
                <div className="event-flyer">
                    <Document className="pdf-viewer" file={eventFlyer} onLoadSuccess={onDocumentLoadSuccess}>
                        {Array.from(new Array(numPages), (el, index) => (
                            <Page key={`page_${index + 1}`} pageNumber={index + 1} width={(width < 600) ? (250) : (550)} renderAnnotationLayer={false} />
                        ))}
                        
                    </Document>
                    {eventFlyer ? (<a href={eventFlyer} type="application/pdf" target="_blank" rel="noopener noreferrer" >Open flyer pdf in separate window</a>) : (null)}
                </div>
            </div>
        )
    }
    return (
        <div>
            {props.event_id ? (
                event ? 
                    (<div>{eventTemplate(event)}</div>) 
                    : 
                    (null)
                ) 
                : 
                (null)}
        </div>
    )
}

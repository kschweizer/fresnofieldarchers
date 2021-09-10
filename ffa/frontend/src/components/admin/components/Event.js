import React, { useState, useEffect } from 'react';
import EventService from '../../../services/EventService';
import { Document, Page, pdfjs } from 'react-pdf';
import '../../pages/Events.scss';

export default function Event(props) {
    const [event, setEvent] = useState(null)
    const eventService = new EventService();
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [flyer, setFlyer] = useState('');
    const [scores, setScores] = useState('');
    const [fileFlag, setFileFlag] = useState(false);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [width, setWidth] = useState(window.innerWidth);
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    useEffect(() => {
        if (props.event_id) {
            eventService.getEvent(props.event_id).then(data => {
                setEvent(data);
                setName(data.name);
                setDescription(data.description);
                setDate(data.date);
                setFlyer(data.flyer);
                setScores(data.scores);
            })
        }
    }, [props.event_id])

    const handleResize = () => {
        setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    const accept = (album) => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'Event Deleted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'info', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const confirmDelete = () => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
    };

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        console.log(event);
    }

    function handleScoresUpload(e) {
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
            setScores(e.target.files[0]);
        } else {
            console.log('file must be of type: pdf');
            setFileFlag(true);
        }
        
    } 

    const onSubmitScores = () => {
        console.log(name);
        console.log(scores);
        let data = new FormData();
        data.append(`name`, name);
        data.append(`date`, date);
        data.append(`description`, description);
        //data.append(`flyer`, flyer);
        data.append(`scores`, scores);
        eventService.patchEvent(data, event.id).then(res => window.location.href = (`/editor/events?event=${res.id}`));
    };

    const eventTemplate = (eventData) => {
        const eventName = eventData.name;
        const eventDescription = eventData.description;
        const eventFlyer = eventData.flyer;
        const eventDate = eventData.format_date;
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
                            <Page key={`page_${index + 1}`} pageNumber={index + 1} renderAnnotationLayer={false} width={(width < 600) ? (250) : (550)} />
                        ))}
                        
                    </Document>
                    <a href={eventFlyer} type="application/pdf" target="_blank" rel="noopener noreferrer" >Open flyer in separate window</a>
                </div>
                <div className="event-scores">
                    <div className="event-header"><h3>{eventName} Scores</h3></div>
                    {eventScores ? (
                        <div>
                            <Document className="pdf-viewer" file={eventScores} onLoadSuccess={onDocumentLoadSuccess}>
                                {Array.from(new Array(numPages), (el, index) => (
                                    <Page key={`page_${index + 1}`} pageNumber={index + 1} renderAnnotationLayer={false} width={(width < 600) ? (250) : (550)} />
                                ))}
                            </Document>
                            <a href={eventScores} type="application/pdf" target="_blank" rel="noopener noreferrer" >Open scores in separate window</a>
                        </div>
                        ) : (
                        <div>
                            <h3>Upload scores</h3>
                            <input type="file" onChange={handleScoresUpload} />
                            {fileFlag ? (<h5 style={{color : 'orange'}}><i className="pi pi-exclamation-triangle"></i>SCORES MUST BE A '.pdf' FILE </h5>) : (null)}
                            <button className="btn btn-success" onClick={onSubmitScores}>Upload</button>

                        </div>
                        )
                    }
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
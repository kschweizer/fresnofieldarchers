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
    const [flyer, setFlyer] = useState(null);
    const [flyerUpload, setFlyerUpload] = useState(null);
    const [scores, setScores] = useState(null);
    const [scoresUpload, setScoresUpload] = useState(null);
    const [fileFlag1, setFileFlag1] = useState(false);
    const [fileFlag2, setFileFlag2] = useState(false);
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

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'Deleted', life: 3000 });
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
    }

    const deleteScores = () => {
        let data = { scores : null };
        eventService.patchEvent(data, event.id).then(data => setScores(data.scores));
    }

    const handleScoresUpload = (e) => {
        const inFile = e.target.files[0];
        if (inFile == null) {
            setFileFlag2(false);
            return;
        }
        const fileName = inFile.name;
        const dotIdx = fileName.lastIndexOf('.');
        const ext = fileName.substring(dotIdx + 1);
        if (ext == 'pdf') {
            setFileFlag2(false);
            setScoresUpload(e.target.files[0]);
        } else {
            console.log('file must be of type: pdf');
            setFileFlag2(true);
        }
        
    } 

    const onSubmitScores = () => {
        let data = new FormData();
        data.append(`scores`, scoresUpload);
        eventService.patchEvent(data, event.id).then(data => setScores(data.scores));
    };

    const deleteFlyer = () => {
        let data = { flyer : null };
        eventService.patchEvent(data, event.id).then(data => {setFlyer(data.flyer); console.log(data.flyer);});
    };

    const uploadFlyer = (e) => {
        const inFile = e.target.files[0];
        if (inFile == null) {
            setFileFlag1(false);
            return;
        }
        const fileName = inFile.name;
        const dotIdx = fileName.lastIndexOf('.');
        const ext = fileName.substring(dotIdx + 1);
        if (ext == 'pdf') {
            setFileFlag1(false);
            setFlyerUpload(e.target.files[0]);
        } else {
            console.log('file must be of type: pdf');
            setFileFlag1(true);
        }
    }

    const submitFlyer = () => {
        let data = new FormData();
        data.append('flyer', flyerUpload);
        eventService.patchEvent(data, event.id).then(data => setFlyer(data.flyer));
    }

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
                    
                    { flyer ? (
                        <>
                            <a href={flyer} type="application/pdf" target="_blank" rel="noopener noreferrer" >Open flyer in separate window</a>
                            <Document className="pdf-viewer" file={flyer} onLoadSuccess={onDocumentLoadSuccess}>
                                {Array.from(new Array(numPages), (el, index) => (
                                    <Page key={`page_${index + 1}`} pageNumber={index + 1} renderAnnotationLayer={false} width={(width < 600) ? (250) : (550)} />
                                ))}
                                
                            </Document>
                            <button className="btn btn-danger btn-sm" onClick={deleteFlyer}>Delete Flyer</button>
                        </> 
                        ) : ( 
                            <>
                            <h3>Upload Flyer</h3>
                            <input type="file" onChange={uploadFlyer} />
                            {fileFlag1 ? (<h5 style={{color : 'orange'}}><i className="pi pi-exclamation-triangle"></i>SCORES MUST BE A '.pdf' FILE </h5>) : (null)}
                            <button className="btn btn-success" onClick={submitFlyer}>Upload</button>
                            </>
                        ) 
                    }
                </div>
                <div className="event-scores">
                    <div className="event-header"><h3>{eventName} Scores</h3></div>
                    {scores ? (
                        <div>
                            <a href={scores} type="application/pdf" target="_blank" rel="noopener noreferrer" >Open scores in separate window</a>
                            <Document className="pdf-viewer" file={scores} onLoadSuccess={onDocumentLoadSuccess}>
                                {Array.from(new Array(numPages), (el, index) => (
                                    <Page key={`page_${index + 1}`} pageNumber={index + 1} renderAnnotationLayer={false} width={(width < 600) ? (250) : (550)} />
                                ))}
                            </Document>
                            <button className="btn btn-danger btn-sm" onClick={deleteScores}>Delete Scores</button>
                        </div>
                        ) : (
                        <div>
                            <h3>Upload Scores</h3>
                            <input type="file" onChange={handleScoresUpload} />
                            {fileFlag2 ? (<h5 style={{color : 'orange'}}><i className="pi pi-exclamation-triangle"></i>SCORES MUST BE A '.pdf' FILE </h5>) : (null)}
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
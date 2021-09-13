import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import '../../blogposts/Blogposts.scss';
import BlogEditor from '../forms/BlogEditor';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { tokenConfig } from '../../../actions/auth';
import store from '../../../store';
import { Button } from 'primereact/button';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Blogposts() {

    const [page, setPage] = useState(1);
    const [previous, setPrevious] = useState(null);
    const [next, setNext] = useState(null);
    const [post1, setPost1] = useState(null);
    const [post2, setPost2] = useState(null);
    const [post3, setPost3] = useState(null);
    const [post4, setPost4] = useState(null);
    const [post5, setPost5] = useState(null);
    const [visible, setVisible] = useState(false);
    const [selection, setSelection] = useState(null);

    const toast = useRef(null);
    let query = useQuery();
    
    function getBlogposts(page_num) {
        axios.get(`/api/webapp/blogposts/?page=${page_num}`).then(res => {
            let results = res.data['results'];
            setPrevious(res.data['previous']);
            setNext(res.data['next']);
            results[0] ? (setPost1(results[0])) : setPost1(null);
            results[1] ? (setPost2(results[1])) : setPost2(null);
            results[2] ? (setPost3(results[2])) : setPost3(null);
            results[3] ? (setPost4(results[3])) : setPost4(null);
            results[4] ? (setPost5(results[4])) : setPost5(null);
        });
    }

    function patchBlogpost(id, data) {
        axios.patch(`/api/webapp/blogposts/${id}/`, data, tokenConfig(store.getState)).then(res => getBlogposts(page));
    }

    function deleteBlogpost(id) {
        axios.delete(`/api/webapp/blogposts/${id}/`, tokenConfig(store.getState)).then(res => getBlogposts(page));
    }

    const accept = (id) => {
        deleteBlogpost(id);
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have deleted a post', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'info', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    useEffect(() => {
        getBlogposts(page);
    }, []);

    const nextPage = e => {
        let newPage = page + 1;
        setPage(newPage);
        getBlogposts(newPage);
    };

    const prevPage = e => {
        let newPage = page - 1;
        setPage(newPage);
        getBlogposts(newPage);
    };

    const handleChange1 = (val) => {
        let temp = post1;
        temp.message = val;
        setPost1(temp);
    };

    const handleChange2 = (val) => {
        let temp = post2;
        temp.message = val;
        setPost2(temp);
    };

    const handleChange3 = (val) => {
        let temp = post3;
        temp.message = val;
        setPost3(temp);
    };

    const handleChange4 = (val) => {
        let temp = post4;
        temp.message = val;
        setPost4(temp);
    };

    const handleChange5 = (val) => {
        let temp = post5;
        temp.message = val;
        setPost5(temp);
    };

    const updatePost1 = () => {
        patchBlogpost(post1.id, post1);
    }

    const updatePost2 = () => {
        patchBlogpost(post2.id, post2);
    }

    const updatePost3 = () => {
        patchBlogpost(post3.id, post3);
    }

    const updatePost4 = () => {
        patchBlogpost(post4.id, post4);
    }

    const updatePost5 = () => {
        patchBlogpost(post5.id, post5);
    }

    return (
        <div className="blog-container">
            <BlogEditor />
            <Toast ref={toast}/>
            { post1 ? (
                <article key={post1.id} className="blogpost">
                <h5 className="blog-date">{post1.date}</h5>
                <ReactQuill className="custom-quill" theme="snow" value={post1.message} onChange={handleChange1} preserveWhitespace={true} />
                <Button className="p-button-success" onClick={updatePost1} label="Update" />
                <ConfirmDialog visible={visible && selection == post1.id} onHide={() => {setSelection(null); setVisible(false);}} message="Are you sure you want to delete this record?"
                                        header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept.bind(this, post1.id)} reject={reject} />
                <Button onClick={() => {setSelection(post1.id); setVisible(true);}} icon="pi pi-times" label="Delete" />
            </article>
            ) : null }
            { post2 ? (
                <article key={post2.id} className="blogpost">
                <h5 className="blog-date">{post2.date}</h5>
                <ReactQuill className="custom-quill" theme="snow" value={post2.message} onChange={handleChange2} preserveWhitespace={true} />
                <Button className="p-button-success" onClick={updatePost2} label="Update" />
                <ConfirmDialog visible={visible && selection == post2.id} onHide={() => {setSelection(null); setVisible(false);}} message="Are you sure you want to delete this record?"
                                        header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept.bind(this, post2.id)} reject={reject} />
                <Button onClick={() => {setSelection(post2.id); setVisible(true);}} icon="pi pi-times" label="Delete" />
            </article>
            ) : null }
            { post3 ? (
                <article key={post3.id} className="blogpost">
                <h5 className="blog-date">{post3.date}</h5>
                <ReactQuill className="custom-quill" theme="snow" value={post3.message} onChange={handleChange3} preserveWhitespace={true} />
                <Button className="p-button-success" onClick={updatePost3} label="Update" />
                <ConfirmDialog visible={visible && selection == post3.id} onHide={() => {setSelection(null); setVisible(false);}} message="Are you sure you want to delete this record?"
                                        header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept.bind(this, post3.id)} reject={reject} />
                <Button onClick={() => {setSelection(post3.id); setVisible(true);}} icon="pi pi-times" label="Delete" />
            </article>
            ) : null }
            { post4 ? (
                <article key={post4.id} className="blogpost">
                <h5 className="blog-date">{post4.date}</h5>
                <ReactQuill className="custom-quill" theme="snow" value={post4.message} onChange={handleChange4} preserveWhitespace={true} />
                <Button className="p-button-success" onClick={updatePost4} label="Update" />
                <ConfirmDialog visible={visible && selection == post4.id} onHide={() => {setSelection(null); setVisible(false);}} message="Are you sure you want to delete this record?"
                                        header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept.bind(this, post4.id)} reject={reject} />
                <Button onClick={() => {setSelection(post4.id); setVisible(true);}} icon="pi pi-times" label="Delete" />
            </article>
            ) : null }
            { post5 ? (
                <article key={post5.id} className="blogpost">
                <h5 className="blog-date">{post5.date}</h5>
                <ReactQuill className="custom-quill" theme="snow" value={post5.message} onChange={handleChange5} preserveWhitespace={true} />
                <Button className="p-button-success" onClick={updatePost5} label="Update" />
                <ConfirmDialog visible={visible && selection == post5.id} onHide={() => {setSelection(null); setVisible(false);}} message="Are you sure you want to delete this record?"
                                        header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept.bind(this, post5.id)} reject={reject} />
                <Button onClick={() => {setSelection(post5.id); setVisible(true);}} icon="pi pi-times" label="Delete" />
            </article>
            ) : null }
            
            { previous !== null &&
                <button className="blog-button btn btn-primary btn-sm" onClick={prevPage}>PREVIOUS</button>
            }

            
            { next !== null && 
                <button className="blog-button btn btn-primary btn-sm" onClick={nextPage}>NEXT</button> 
            }
        </div>
    );
}

export default Blogposts;

import React, { useState, useContext } from 'react';
import { Button, Form, Jumbotron } from 'react-bootstrap';
import { v4 } from 'uuid';
import { APP_NAME } from '../../util/config/constants';
import { ThemeContext } from '../../util/context/ThemeContext';
import { addNote } from '../../util/data/notes';
import Container from '../layout/Container';


function AddNote(){
    document.title = `${APP_NAME} | Add Note`;
    const [title, setTitle] = useState('');
    const [subject, setSubject] = useState('');
    const [visibility, setVisibility] = useState('Private');

    const { theme } = useContext(ThemeContext);


    function add(event){
        event.preventDefault();
        const date = new Date();
        addNote({
            id: v4(), 
            title: title, 
            subject: subject, 
            visibility: visibility, 
            timestamp: `${date.toDateString()} ${date.toLocaleTimeString()}`
        })
        window.location = '/my_notes';
    }

    return (
        <Container>
            <Jumbotron style={theme.note}>
                <h4>Add New Note</h4>

                <Form onSubmit={add} >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" onChange={e => setTitle(e.target.value)} style={theme.input} required/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control as="textarea" style={theme.input} rows={5} onChange={e => setSubject(e.target.value)} required/>
                    </Form.Group>

                    <div className='form-group'>
                        <label htmlFor='visibility'>Visibility</label>
                        <select id='visibility' className='form-control' style={theme.input} onChange={e => setVisibility(e.target.value)}>
                            <option value='Private'>Private</option>
                            <option value='Public'>Public</option>
                        </select>
                    </div>
                    <Button variant="success" type="submit">
                        Submit
                    </Button>
                </Form>
            </Jumbotron>
        </Container>
    );
}


export default AddNote;


import React, { useState, useContext } from 'react';
import { Button, Form, Jumbotron } from 'react-bootstrap';
import { v4 } from 'uuid';
import { APP_NAME } from '../../util/config/constants';
import { ThemeContext } from '../../util/context/ThemeContext';
import { addNote } from '../../util/data/notes';
import Container from '../layout/Container';
import NoteForm from './NoteForm';


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

                <NoteForm
                    title={ title }
                    setTitle={ setTitle }
                    subject={ subject }
                    setSubject={ setSubject }
                    visibility={ visibility }
                    setVisibility={ setVisibility }
                    submit={ add }
                />
            </Jumbotron>
        </Container>
    );
}


export default AddNote;

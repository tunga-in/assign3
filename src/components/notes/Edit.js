
import React, { useState, useEffect } from 'react';
import { editNote, getNote } from '../../util/data/notes';
import Container from '../layout/Container';
import NoteForm from './NoteForm';


function Edit(props){
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState('');
    const [subject, setSubject] = useState('');
    const [visibility, setVisibility] = useState('Private');
    const id = props.match.params.id;


    useEffect(() => {
        function init(){
            getNote(id)
            .then(n => {
                setTitle(n.title);
                setSubject(n.subject);
                setVisibility(n.visibility);
                setLoading(false);
            })
        }

        init();

    }, [id])

    console.log('here');


    const submit = (event) => {
        event.preventDefault();
        editNote({
            id: id,
            title: title,
            subject: subject,
            visibility: visibility
        })
        .then(data => {
            window.location = '/my_notes';
        })
    }


    if(loading){
        return (
            <Container></Container>
        );

    } else {
        return (
            <Container>
                <NoteForm
                    title={ title }
                    setTitle={ setTitle }
                    subject={ subject }
                    setSubject={ setSubject }
                    visibility={ visibility }
                    setVisibility={ setVisibility }
                    submit={ submit }
                />
            </Container>
        );
    }
}


export default Edit;

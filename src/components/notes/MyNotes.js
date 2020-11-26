
import React, { useEffect, useState } from 'react';
import { deleteNote, getMyNotes } from '../../util/data/notes';
import Container from '../layout/Container';
import NotesList from './NotesList';


function MyNotes(){
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        function init(){
            getMyNotes()
            .then(data => {
                setNotes(data);
            })
        }

        init();
    }, []);


    function _deleteNote(noteId){
        deleteNote(noteId)
        .then(notes => setNotes(notes));
    }

    return (
        <Container>
            <div className='row'>
                <NotesList notes={notes} publicVisibility={false} _deleteNote={_deleteNote}/>
            </div>
        </Container>
    );
}

export default MyNotes;

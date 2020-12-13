
import React, { useEffect, useState } from 'react';
import { deleteNote, getMyNotes } from '../../util/data/notes';
import Container from '../layout/Container';
import NotesList from './NotesList';


function MyNotes(){
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        function init(){
            getMyNotes()
            .then(data => {
                setNotes(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            })
        }

        init();
    }, []);


    function _deleteNote(noteId){
        deleteNote(noteId)
        .then(notes => setNotes(notes));
    }

    if(loading){
        return (
            <Container>
                <div className='row'>
                    Loading.....
                </div>
            </Container>
        );
    } else return (
        <Container>
            <div className='row'>
                <NotesList notes={notes} publicVisibility={false} _deleteNote={_deleteNote}/>
            </div>
        </Container>
    );
}

export default MyNotes;

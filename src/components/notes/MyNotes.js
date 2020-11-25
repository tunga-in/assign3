
import React, { useEffect, useState } from 'react';
import { deleteNote, getMyNotes } from '../../util/data/notes';
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
        <div className='container'>
            <div style={{height:40}}></div>
            <div className='row'>
                <NotesList notes={notes} publicVisibility={false} _deleteNote={_deleteNote}/>
            </div>
        </div>
    );
}

export default MyNotes;

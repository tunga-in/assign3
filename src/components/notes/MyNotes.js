
import React, { useEffect, useState } from 'react';
import { Toast } from 'react-bootstrap';
import { deleteNote, getNotes } from '../../util/data/notes';


function MyNotes(){
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        function init(){
            getNotes()
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

    console.log(notes);

    return (
        <div className='container'>
            <div style={{height:40}}></div>
            <div className='row'>
                {
                    notes.map((note, index) => {
                        return (
                            <div className='n-fade n-toast n-show' key={index}>
                                <Toast.Header closeButton={false}>
                                    <strong className="mr-auto">{note.title}</strong>
                                    <small>{note.timestamp}</small>
                                </Toast.Header>
                                <Toast.Body>{note.subject}</Toast.Body>
                                <Toast.Header closeButton={false}>
                                    <strong className="mr-auto" style={{fontSize: '85%'}}>Category</strong>
                                    <small>{note.visibility}</small>
                                </Toast.Header>

                                <div className='form-group n-pl-29'>
                                    <button className='btn btn-success btn-sm'>Edit</button>
                                    <span className='n-pl-29'></span>
                                    <button className='btn btn-danger btn-sm' onClick={() => _deleteNote(note.id)}>Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}


export default MyNotes;


import React from 'react';
import { Toast } from 'react-bootstrap';



function NotesList({notes, publicVisibility=false, _deleteNote=f=>f}){
    if(notes.length){
        return notes.map((note, index) => {
            return (
                <div className='n-fade n-toast n-show' key={index}>
                    <Toast.Header closeButton={false}>
                        <strong className="mr-auto">{note.title}</strong>
                        <small>{note.timestamp}</small>
                    </Toast.Header>
                    <Toast.Body>{note.subject}</Toast.Body>
                    <Toast.Header closeButton={false}>
                        <strong className="mr-auto" style={{fontSize: '85%'}}></strong>
                        <small>
                            {
                                publicVisibility? note.user.displayName: note.visibility
                            }
                        </small>
                    </Toast.Header>

                    {
                        publicVisibility? null:

                        <div className='form-group n-pl-29'>
                            <button className='btn btn-success btn-sm'>Edit</button>
                            <span className='n-pl-29'></span>
                            <button className='btn btn-danger btn-sm' onClick={() => _deleteNote(note.id)}>Delete</button>
                        </div>
                    }
                </div>
            )
        });

    } else {
        return (
            <div style={{padding: 40, textAlign: 'center'}}>No Notes Available</div>
        );
    }
}


export default NotesList;


import React, { useContext } from 'react';
import { Toast } from 'react-bootstrap';
import { ThemeContext } from '../../util/context/ThemeContext';


function ThemedNote({note, publicVisibility, _deleteNote}){
    const { theme } = useContext(ThemeContext);

    return (
        <div className='n-fade n-toast n-show' style={theme.note}>
            <Toast.Header closeButton={false}>
                <strong className="mr-auto">{note.title}</strong>
                <small>{note.timestamp}</small>
            </Toast.Header>
            <Toast.Body>{note.subject}</Toast.Body>
            <Toast.Header closeButton={false} style={theme.note}>
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
                    <a className='btn btn-success btn-sm' href={ `/note/${note.id}/edit` } >Edit</a>
                    <span className='n-pl-29'></span>
                    <button className='btn btn-danger btn-sm' onClick={() => _deleteNote(note.id)}>Delete</button>
                </div>
            }
        </div>
    );
}


export default ThemedNote;

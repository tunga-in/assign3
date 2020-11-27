
import React from 'react';
import ThemedNote from './ThemedNote';



function NotesList({notes, publicVisibility=false, _deleteNote=f=>f}){
    if(notes.length){
        return notes.map((note, index) => {
            return (
                <ThemedNote 
                    className='n-fade n-toast n-show' 
                    key={index} 
                    note={ note } 
                    publicVisibility={ publicVisibility}
                    _deleteNote={ _deleteNote }
                />
            )
        });

    } else {
        return (
            <div style={{padding: 40, textAlign: 'center'}}>No Notes Available</div>
        );
    }
}


export default NotesList;

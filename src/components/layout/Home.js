
import React, {useState, useEffect} from 'react';
import { getPublicNotes } from '../../util/data/notes';
import NotesList from '../notes/NotesList';


function Home(){
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        function init(){
            getPublicNotes()
            .then(data => {
                setNotes(data);
            })
        }

        init();
    }, []);


    return (
        <div className='container'>
            <div style={{height:40}}></div>
            <NotesList notes={notes} publicVisibility={true}/>
        </div>
    );
}


export default Home;

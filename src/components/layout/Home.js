
import React, {useState, useEffect} from 'react';
import { getPublicNotes } from '../../util/data/notes';
import NotesList from '../notes/NotesList';
import Container from './Container';


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
        <Container>
            <NotesList notes={notes} publicVisibility={true}/>
        </Container>
    );
}


export default Home;

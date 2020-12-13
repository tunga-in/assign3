
import React, {useState, useEffect} from 'react';
import { getPublicNotes } from '../../util/data/notes';
import NotesList from '../notes/NotesList';
import Container from './Container';


function Home(){
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        function init(){
            getPublicNotes()
            .then(data => {
                setNotes(data);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
            })
        }

        init();
    }, []);


    if(loading){
        return (
            <Container>
                <div className='row'>
                    Loading.....
                </div>
            </Container>
        );
        
    } else {
        return (
            <Container>
                <NotesList notes={notes} publicVisibility={true}/>
            </Container>
        );
    }
}


export default Home;

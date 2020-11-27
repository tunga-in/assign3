import { getCurrUser } from "./user";


export async function addNote(note){
    let currNotes = localStorage.getItem('@notes');
    currNotes = currNotes? JSON.parse(currNotes): [];
    const user = await getCurrUser();
    const newNotes = [
        {
            ...note,
            user: user

        },
        ...currNotes
    ];
    localStorage.setItem('@notes', JSON.stringify(newNotes));
}


export async function editNote(note){
    const notes = await getNotes();
    const newNotes = notes.map(n => {
        if(n.id === note.id){
            return { ...n, ...note};

        } else {
            return n;
        }
    })

    localStorage.setItem('@notes', JSON.stringify(newNotes));
}


export async function getNotes(){
    const storeNotes = localStorage.getItem('@notes');
    let notes = storeNotes? JSON.parse(storeNotes): [];

    return notes;
}


export async function deleteNote(noteId){
    const storeNotes = localStorage.getItem('@notes');
    let notes = storeNotes? JSON.parse(storeNotes): [];
    const filteredNotes = notes.filter(note => note.id !== noteId);
    localStorage.setItem('@notes', JSON.stringify(filteredNotes));
    return filteredNotes;
}


export async function getPublicNotes(){
    const notes = await getNotes();
    return notes.filter(note => note.visibility === 'Public');
}


export async function getMyNotes(){
    const notes = await getNotes();
    const user = await getCurrUser();
    return notes.filter(note => note.user.id === user.id);
}


export async function getNote(id){
    const notes = await getNotes();
    let note = {};
    notes.map(n => {
        if(n.id === id){
            note = n;
        }
    });

    return note;
}

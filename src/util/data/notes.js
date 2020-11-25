

export async function addNote(){}


export async function getNotes(mine=false){
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

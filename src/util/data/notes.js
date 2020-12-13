import { firebase_db } from "../config/firebaseConfig";
import { getCurrUser } from "./user";


export async function addNote(note){
    const user = await getCurrUser();
    const notesRef = firebase_db.collection('notes').doc(note.id);
    await notesRef.set({...note, user: user});
}


export async function editNote(note){
    const notesRef = firebase_db.collection('notes').doc(note.id);
    // Update this note
    await notesRef.update(note);

}


export async function getNotes(){
    const snapshot = await firebase_db.collection("notes").get();
    let notes = snapshot.docs.map(doc => doc.data());
    return notes;
}


export async function deleteNote(noteId){
    await firebase_db.collection('notes').doc(noteId).delete();
    return await getMyNotes();
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
    const note = await firebase_db.collection('notes').doc(id).get();
    return note.data();
}

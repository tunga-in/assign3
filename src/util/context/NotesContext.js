
import React, {useState, useEffect, useContext, createContext} from 'react';


export const NotesContext = createContext();


function NotesContextProvider({children}){
    function addNote(note){
        const {category, title, subject, visibility} = note;
        
    }
}


export default NotesContextProvider;

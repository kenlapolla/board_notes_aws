import axios from 'axios';

export const DELETE_NOTE = "DELETE_NOTE";

export const deleteNote = (text) => ({
    type: DELETE_NOTE,
    payload:{text}
})


export const ADD_NOTE = "ADD_NOTE";
export const addNewNote = (text) => ({
    type: ADD_NOTE,
    payload:{text}
})



export const INITIALIZE_NOTES = "INITIALIZE_NOTES"; 
const initializeNoteState = (data) => {
    return {
        type: INITIALIZE_NOTES,
        notes: data
    }
}
 
export const setInitialNoteState = () => async (dispatch) => {
    dispatch(initializeNoteState([]));
    const result = await axios.get('54.225.74.64:8081/notes');
    dispatch(initializeNoteState(result.data))};

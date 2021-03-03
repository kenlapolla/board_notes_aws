import {DELETE_NOTE, ADD_NOTE} from '../actions/boardAction';


const initialState = [];

export const notes = (state = initialState, { type, payload }) => {
    switch (type) {

    case ADD_NOTE:
        let newNote = {
            id: Date.now(),
            title: "New Note",
            body: "Sample note body text"
        };

        return [...state, newNote]
    case DELETE_NOTE:
        return state.filter((note) => note.id !== payload.id);

    default:
        return state
    }
}

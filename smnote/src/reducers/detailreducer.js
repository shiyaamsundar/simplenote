const initialState = {
  allnotes: [],
  searchnotes: [],
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_NOTES":
      return {
        ...state,
        allnotes: action.payload.allnotes.data,
        isLoading: true,
      };

    case "SPECIFIC_NOTE":
      return {
        ...state,
        note: action.payload.note.data,
      };

    case "ADD_NOTE":
      return {
        ...state,
      };
    case "ON_SAVE":
      return {
        ...state,
        note: action.payload.note.data,
      };
    case "SEARCH":
      return {
        ...state,
        searchnotes: action.payload.searchnotes,
      };
    case "FLIP_PINNED":
      return {
        ...state,
        note: action.payload.note.data,
      };
    case "ACTIVE_NOTE": {
      return {
        ...state,
        active_note_id: action.payload.data.data._id,
      };
    }

    default:
      return state;
  }
};

export default notesReducer;

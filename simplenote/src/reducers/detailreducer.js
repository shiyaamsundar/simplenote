const initialState={
    allnotes:[],
    isLoading:true
}


const notesReducer=(state=initialState,action)=>{
    switch(action.type){

        case "GET_ALL_NOTES":
            return {
                ...state,
                allnotes:action.payload.allnotes.data,
                isLoading:true
            }

        case "LOADING_DETAILS":
            return {
                ...state,
                isLoading:true
            }
            default:
                return state;
    }
}

export default notesReducer;
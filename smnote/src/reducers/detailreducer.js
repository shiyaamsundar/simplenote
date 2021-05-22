const initialState={
    allnotes:[],
    isLoading:true,
    searchnotes:[]
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

        case "SPECIFIC_NOTE":
            return {
                ...state,
                note:action.payload.note.data
            }

        case "ADD_NOTE":
            return{
                ...state,
                
            }   
        case "ON_SAVE":
            return {
                ...state,
                note:action.payload.note.data
            }  
            case "SEARCH":

                return {
                    ...state,
                    searchnotes:action.payload.searchnotes,
                }  
            case "FLIP_PINNED":
                return {
                    ...state,
                    note:action.payload.note.data
                }  
           

            default:
                return state;
    }
            
}

export default notesReducer;
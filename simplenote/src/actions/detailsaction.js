import axios from "axios";


const url="http://localhost:5000/api/"


export const loadallnotes=()=>async(dispatch)=>{

    const allnotes=await axios.get(`${url}/allnotesordered`)
    console.log(allnotes);
    

    dispatch({
        type:"GET_ALL_NOTES",
        payload:{
            allnotes:allnotes.data
        }
    })
}
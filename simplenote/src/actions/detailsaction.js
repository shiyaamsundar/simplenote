import axios from "axios";


const url="http://localhost:5000/api/"


export const loadallnotes=()=>async(dispatch)=>{

    const allnotes=await axios.get(`${url}/allnotesordered`)
    

    dispatch({
        type:"GET_ALL_NOTES",
        payload:{
            allnotes:allnotes.data
        }
    })
}

export const loadsepcificnote=(id)=>async(dispatch)=>{
    const note=await axios.get(`${url}/note/${id}`)
    dispatch({
        type:"SPECIFIC_NOTE",
        payload:{
            note:note.data
        }
    })

}

export const addnote=()=>async(dispatch)=>{
    
    const note=await axios.post(`${url}/create`,{
            data:"",
            status:200
    })

    console.log(note);

    dispatch({
        type:"ADD_NOTE",
        payload:{
            note:note.data
        }
    })
    const allnotes=await axios.get(`${url}/allnotesordered`)
    dispatch({
        type:"GET_ALL_NOTES",
        payload:{
            allnotes:allnotes.data
        }
    })
    }

export const savenote=(id,data)=>async(dispatch)=>{

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const update=await axios.put(`${url}/updatenotes/${id}`,{data,config})


    const note=await axios.get(`${url}/note/${id}`)
    dispatch({
        type:"SPECIFIC_NOTE",
        payload:{
            note:note.data
        }
    })

    const allnotes=await axios.get(`${url}/allnotesordered`)
    

    dispatch({
        type:"GET_ALL_NOTES",
        payload:{
            allnotes:allnotes.data
        }
    })
}


export const flip_pinned=(id,p)=>async(dispatch)=>{

    console.log(id,p,"aaaaaaaaaaaaaaaaaaaaaaaa");

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const pinned=!p
    const update=await axios.put(`${url}/updatenotes/${id}`,{pinned,config})


    dispatch({
        type:"SPECIFIC_NOTE",
        payload:{
            note:update.data
        }
    })

    const allnotes=await axios.get(`${url}/allnotesordered`)
    

    dispatch({
        type:"GET_ALL_NOTES",
        payload:{
            allnotes:allnotes.data
        }
    })
}
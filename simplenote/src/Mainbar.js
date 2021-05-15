import React, { useEffect, useState } from 'react'
import ReactMarkdown from "react-markdown";
import {render} from 'react-dom'
import Markdown11 from './Markdown';
import { loadsepcificnote, savenote } from './actions/detailsaction';
import { useDispatch, useSelector } from 'react-redux';


const Mainbar = () => {

    const dispatch=useDispatch()
    let notes=useSelector(state=>state.notes.note)
    const toggle=useSelector(state=>state.toggle)

    console.log(toggle.preview);
    

    // console.log(notes.data,"nnnnn");


    let [value,setvalue]=useState({
        
        data:"",
        tags:[
            "abcd","efgh"
        ]
    })
    const {data,tags}=value


    useEffect(()=>{
        if(window.id){
            setvalue({...value,data:notes.data})

            console.log(value.data,"useeff");
        }

    },[notes,window.id])


   

    console.log(value.tags);

    
    const handleChange=name=>event=>{
        setvalue({...value,[name]:event.target.value})
    }


        const removerSkills=(i)=>{

            console.log(i);


        const v=value.tags.splice(i,1) 
        console.log(v);
        setvalue({...value,tags:v})

        }

        const addSkill=e=>{
            console.log(e.target.value);
        }

    return (
        <div className="main">

            {!toggle.preview?(
                 <div className="container">
                 <div className="spc"></div>
             <textarea className="body" placeholder="write your note" value={value.data} onChange={handleChange("data")}  style={{border: "none"}}>
                 
                
                 
 
             </textarea>
             <button className="btn" onClick={()=>dispatch(savenote(window.id,value.data))}>save</button>
             
             </div>
            ):(<div className="spc">

                <h3>Markdown Preview:-</h3>
                <br/><br/>
                <ReactMarkdown className="mm">{value.data}</ReactMarkdown>
        
            </div>)}

            <h2> Add Your Skill </h2>
                <div className="skill">
                    <ul>
                        { value.tags.map((t, i) => {
                            return (
                                <li key={i}> {t} <button onClick={() => removerSkills(i)}>+</button> </li>
                            )
                        }) }
                        <li className="input-skill">
                            <input type="text" size="4" onKeyDown={addSkill}  ref={}/>
                        </li>
                    </ul>
                </div>

           

            
    


            <div className="container">
                <h3></h3>

            </div>
        </div>
    
)
}

export default Mainbar

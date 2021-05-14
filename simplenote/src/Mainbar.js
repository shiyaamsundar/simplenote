import React,{ useState } from 'react'
import ReactMarkdown from "react-markdown";
import {render} from 'react-dom'
import Markdown11 from './Markdown';



const Mainbar = () => {

 

    const [value,setvalue]=useState()
    console.log(value);

  

    
    const handleChange=name=>event=>{
        setvalue({...value,[name]:event.target.value})
    }

    return (
        <div className="main">

            <div className="container">
                <div className="spc"></div>
            <textarea className="body" placeholder="write your note" onChange={(e)=>setvalue(e.target.value)}  style={{border: "none"}}></textarea>
            <button className="btn">save</button>
            <hr/>
            <ReactMarkdown className="mm">{value}</ReactMarkdown>
        
    

            </div>
            <div className="container">
                <h3></h3>

            </div>
        </div>
    
)
}

export default Mainbar

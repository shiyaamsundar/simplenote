import React, { useEffect, useState } from 'react'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Notescard from './notescard'
import Menu from './Menu';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { useDispatch, useSelector } from 'react-redux';
import { addnote } from './actions/actions';
import { Note } from '@material-ui/icons';
import { loadallnotes } from './actions/detailsaction';


const Sidebar = () => {

    const toggle=useSelector(state=>state.toggle)
    const dispatch=useDispatch()
    console.log(toggle.addnote,"toggle notes");

    const allnotes=useSelector(state=>state.notes)

    
    
    

    useEffect(()=>{
        dispatch(loadallnotes())
    },[])


    const sortedNotes=allnotes.allnotes.sort((a,b)=>b.modified-a.modified)

    console.log(sortedNotes,"sorted");


    return (
        <div className="sidebar">



            
            <div className="search">         
            <SearchOutlinedIcon size="medium" className="side-icon"  />
            <input type="text" placeholder="search notes and tags" className="search-p" ></input></div>
            <div>

               {
                   allnotes.allnotes.map((data,i)=>{
                        return (
                    <Notescard  index={i} data={data}/>
                        )

                   })

               }
                


            </div>





            
        </div>
    )
}

export default Sidebar

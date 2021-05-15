import React from 'react'
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import StarIcon from '@material-ui/icons/Star';
import { loadsepcificnote,flip_pinned } from './actions/detailsaction';
import { useDispatch, useSelector } from 'react-redux';


const Notescard = ({data}) => {

    const dispatch=useDispatch()

    let firstline=""
    let secondline=""

    if(data.data)
    {
     firstline=(data.data).substring(0,30)
     secondline=(data.data).substring(30,100)

    }



    const modified=(data.modified).substring(0,19)
    const m=new Date(modified)
    // console.log(,"dddd");
    const day=m.getDate()
    const month=m.getMonth()
    const year=m.getFullYear()
    const hr=m.getHours()
    const mins=m.getMinutes()



    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    
    const date=(new Date(year,month,day,hr,mins)).toLocaleString()

    const ad=date.substring(10,25)
    

    const setactive=(id)=>{
        window.id=id
        console.log(window.id);
        dispatch(loadsepcificnote(window.id))
        


    }

    // let addactiveclass=document.getElementsByClassName("notes")
    // addactiveclass.classList.add("mystyle")




    // const firstline=data.data.substr(0,data.data.indexOf("/n"))

    // console.log(firstline);
    // let h="omalak his answer is correct, but in case you want to really only match the first line it will be useful to pass the optional second limit parameter. Like this you prevent that a long string (with thousands of lines) will be splitted till the end before the first match is returned."
    //     console.log(h.split('/n')[]);
    
    return (
        <div className={`notes ${window.id===data._id&&"active"}`} onClick={()=>setactive(data._id)}  >
             {!data.pinned?(
                   <GradeOutlinedIcon className="star" onClick={()=>dispatch(flip_pinned(window.id,data.pinned))}/> 
           
            ):(
                <StarIcon className="star-fill" onClick={()=>dispatch(flip_pinned(window.id,data.pinned))}/>
            )} 
           
            <div className="card">
            <h3 className="card-head">{firstline}</h3>
            <br/>
            <p className="card-p">{secondline}</p>
            <small className="note-meta ">Last Modify [date]:-   {months[month]} , {year},  {day}    ,{ad}
            </small>
            </div>
            
            
        </div>
    )
}

export default Notescard


import React, { useState ,useEffect}  from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PostAddIcon from '@material-ui/icons/PostAdd';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import InfoIcon from '@material-ui/icons/Info';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FlipOutlinedIcon from '@material-ui/icons/FlipOutlined';
import Menu from './Menu';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { preview,arrow,flip,more,check,info} from './actions/actions';
import { PermDeviceInformationRounded } from '@material-ui/icons';
import { addnote, loadallnotes } from './actions/detailsaction';



// const Navbar = () => {

//     const toggle=useSelector(state=>state.toggle)
//     const dispatch=useDispatch()
//     let notes=useSelector(state=>state.notes.note)

//     const allnotes=useSelector(state=>state.notes)
//     console.log(allnotes.allnotes.length,"len-allnotes");

//     function countWords(str) {
//         if(window.id && str)
//         {
//         str = str.replace(/(^\s*)|(\s*$)/gi,"");
//         str = str.replace(/[ ]{2,}/gi," ");
//         str = str.replace(/\n /,"\n");
//         return str.split(' ').length;
//         }
//         else{
//             return 0
//         }
//      }

//     useEffect(()=>{
//         if(window.id){
//             setvalue({...value,data:notes})

//             console.log(value.data.modified,"useeff");
//         }
//         loadallnotes()

//     },[notes,window.id])







//     const [value,setvalue]=useState({
//         data:""
//     })
//     const {data}=value

//     var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
//     var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    
  
//     const modified=(value.data.modified)
//     const m=new Date(modified)
//     const day=m.getDate()
//     const month=m.getMonth()
//     const year=m.getFullYear()
//     const hr=m.getHours()
//     const mins=m.getMinutes()

//     let words=0
//     let length=0
//       const md_date=(new Date(year,month,day,hr,mins)).toLocaleString().substring(10,25)

//       if(window.id && value.data.data)
//       {
//        words=countWords(value.data.data)
//        length=value.data.data.length
//       console.log(words,length);
//       }

//     const created=(value.data.modified)
//     const c=new Date(modified)
//     const c_day=c.getDate()
//     const c_month=c.getMonth()
//     const c_year=c.getFullYear()
//     const c_hr=c.getHours()
//     const c_mins=c.getMinutes()

//     const cd_date=(new Date(c_year,c_month,c_day,c_hr,c_mins)).toLocaleString().substring(10,25)


//     return (
        
//         <div className="navbar">
// <div className="nav-row">
    

// <ArrowForwardIosIcon className="nav-icon arrow" fontSize="medium" onClick={()=>dispatch(arrow())}/>
// <div className="nav-notes">All Notes</div>
// <PostAddIcon fontSize="medium" className="nav-icon post" onClick={()=>dispatch(addnote())}/>
// <div className="line"></div>
// {toggle.arrow?(<Menu/>):(<></>)}

// <div className="nav-right">
// <FlipOutlinedIcon  className="nav-icon flip" fontSize="medium"   onClick={()=>dispatch(flip())}/> 
// <div className="emt"></div>
//     {!toggle.preview ?(<div className="eye">
    
//     <VisibilityOffIcon className="nav-icon" fontSize="medium" onClick={()=>dispatch(preview())}/>
 
//     <span className="tooltip">preview</span>
//     </div>
    
//     ):(<div className="eye">
//         <VisibilityIcon  className="nav-icon eye" fontSize="medium" onClick={()=>dispatch(preview())}/>
//         <span className="tooltip">preview</span>
//         </div>
//     )}
   
//    <div className="info">
//     <InfoIcon className="nav-icon info" fontSize="medium" onClick={()=>dispatch(info())}/>
//     <span className="tooltip">info</span></div>
    
//     <div className="check">
//     <PlaylistAddCheckIcon className="nav-icon check" fontSize="medium" onClick={()=>dispatch(check())} />
//     <span className="tooltip">check</span></div>
//     <div className="more">
//     <MoreVertIcon className="nav-icon more" fontSize="medium" onClick={()=>dispatch(more())}/>
//     <span className="tooltip">more</span></div>
// </div>

//         </div>

//         {toggle.info?(
//                     <div className="div-text">
//                     <span className="info-heading">Documents</span>
//                 <i class="fa fa-window-close close" aria-hidden="true" onClick={()=>dispatch(info())}/>
//                 <hr className="txt-hr"/>
//                 <div className="window">
//                 <p className="modified"> Modified<span className="modified">

//                 {months[month]} , {year},  {day}    ,{md_date}
                
//                 </span></p>
//                 <p className="created"> Created<span className="created">
//                 {months[c_month]} , {c_year},  {c_day}    ,{cd_date}
//                     </span></p>
//                 <p className="words"> Words<span className="words">{words}</span></p>
//                 <p className="char"> Characters<span className="char">{length}</span></p>
//                 </div>
            
//                 </div>
                
//         ):(<></>)}


//         </div>

        
        
        
//     )
// }

// export default Navbar




function Dummy(){
    const toggle=useSelector(state=>state.toggle)
    let notes=useSelector(state=>state.notes.note)

    return toggle,notes

}


export default class Navbar extends Component {


    constructor(props) {
        super(props)
        {
            this.state={
                toggle:props.toggle,
                notes:props.notes
            }
        }
    }

    





    render() {

        

    

        console.log(allnotes.allnotes.length,"len-allnotes");
    
        function countWords(str) {
            if(window.id && str)
            {
            str = str.replace(/(^\s*)|(\s*$)/gi,"");
            str = str.replace(/[ ]{2,}/gi," ");
            str = str.replace(/\n /,"\n");
            return str.split(' ').length;
            }
            else{
                return 0
            }
         }

             var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    
  
    const modified=(value.data.modified)
    const m=new Date(modified)
    const day=m.getDate()
    const month=m.getMonth()
    const year=m.getFullYear()
    const hr=m.getHours()
    const mins=m.getMinutes()

    let words=0
    let length=0
      const md_date=(new Date(year,month,day,hr,mins)).toLocaleString().substring(10,25)

      if(window.id && value.data.data)
      {
       words=countWords(value.data.data)
       length=value.data.data.length
      console.log(words,length);
      }

    const created=(value.data.modified)
    const c=new Date(modified)
    const c_day=c.getDate()
    const c_month=c.getMonth()
    const c_year=c.getFullYear()
    const c_hr=c.getHours()
    const c_mins=c.getMinutes()

    const cd_date=(new Date(c_year,c_month,c_day,c_hr,c_mins)).toLocaleString().substring(10,25)


    
        return (
        <div className="navbar">
<div className="nav-row">
    

<ArrowForwardIosIcon className="nav-icon arrow" fontSize="medium" onClick={()=>dispatch(arrow())}/>
<div className="nav-notes">All Notes</div>
<PostAddIcon fontSize="medium" className="nav-icon post" onClick={()=>dispatch(addnote())}/>
<div className="line"></div>
{toggle.arrow?(<Menu/>):(<></>)}

<div className="nav-right">
<FlipOutlinedIcon  className="nav-icon flip" fontSize="medium"   onClick={()=>dispatch(flip())}/> 
<div className="emt"></div>
    {!toggle.preview ?(<div className="eye">
    
    <VisibilityOffIcon className="nav-icon" fontSize="medium" onClick={()=>dispatch(preview())}/>
 
    <span className="tooltip">preview</span>
    </div>
    
    ):(<div className="eye">
        <VisibilityIcon  className="nav-icon eye" fontSize="medium" onClick={()=>dispatch(preview())}/>
        <span className="tooltip">preview</span>
        </div>
    )}
   
   <div className="info">
    <InfoIcon className="nav-icon info" fontSize="medium" onClick={()=>dispatch(info())}/>
    <span className="tooltip">info</span></div>
    
    <div className="check">
    <PlaylistAddCheckIcon className="nav-icon check" fontSize="medium" onClick={()=>dispatch(check())} />
    <span className="tooltip">check</span></div>
    <div className="more">
    <MoreVertIcon className="nav-icon more" fontSize="medium" onClick={()=>dispatch(more())}/>
    <span className="tooltip">more</span></div>
</div>

        </div>

        {toggle.info?(
                    <div className="div-text">
                    <span className="info-heading">Documents</span>
                <i class="fa fa-window-close close" aria-hidden="true" onClick={()=>dispatch(info())}/>
                <hr className="txt-hr"/>
                <div className="window">
                <p className="modified"> Modified<span className="modified">

                {months[month]} , {year},  {day}    ,{md_date}
                
                </span></p>
                <p className="created"> Created<span className="created">
                {months[c_month]} , {c_year},  {c_day}    ,{cd_date}
                    </span></p>
                <p className="words"> Words<span className="words">{words}</span></p>
                <p className="char"> Characters<span className="char">{length}</span></p>
                </div>
            
                </div>
                
        ):(<></>)}


        </div>
        )
    }
}

import React, { useState }  from 'react'
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
import { preview,arrow,flip,more,check,info,addnote } from './actions/actions';
import { PermDeviceInformationRounded } from '@material-ui/icons';



const Navbar = () => {

    const toggle=useSelector(state=>state.toggle)
    const dispatch=useDispatch()

    console.log(toggle,"toggle");



    const [value,setvalue]=useState({
        preview:false,
        info:false,
        more:false,
        check:false,
        flip:false,
        arrow:false,
        

    })






const flipvalues=(d)=>{
    console.log(d);

    if(d=="flip"){
    setvalue({
        ...value,
        flip:!value.flip
    })
    }
    if(d=="preview"){
        setvalue({
            ...value,
            preview:!value.preview
        })
    }
    if(d=="info"){
        setvalue({
            ...value,
            info:!value.info
        })
        }
        if(d=="more"){
            setvalue({
                ...value,
                more:!value.more
            })
            }
            if(d=="check"){
                setvalue({
                    ...value,
                    check:!value.check
                })
                }
                if(d=="arrow"){
                    setvalue({
                        ...value,
                        arrow:!value.arrow
                    })
                    }

}


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
                <p>Last synced <span className="lastsynced">May 13, 2021, 11:28 AM</span></p>
                <p className="modified"> Modified<span className="modified">May 13, 2021, 11:27 AM</span></p>
                <p className="created"> Created<span className="created">May 11, 2021, 9:15 AM</span></p>
                <p className="words"> Words<span className="words">5</span></p>
                <p className="char"> Characters<span className="char">109</span></p>
                </div>
            
                </div>
                
        ):(<></>)}


        </div>

        
        
        
    )
}

export default Navbar

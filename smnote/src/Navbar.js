import React, { Component } from 'react'

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PostAddIcon from '@material-ui/icons/PostAdd';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import InfoIcon from '@material-ui/icons/Info';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FlipOutlinedIcon from '@material-ui/icons/FlipOutlined';
import Menu from './Menu';
import { connect} from 'react-redux';
import { preview,arrow,flip,more,check,info} from './actions/actions';
import { addnote, loadallnotes } from './actions/detailsaction';
import Mainbar from './Mainbar';
import axios from 'axios';



class Navbar extends Component {

    constructor(props) {
        super(props)
        {
            

        }

    }

    componentDidMount(){
        this.props.loadnotes()
    }


    render() {






        const handletoggle=(d)=>{

            if(d=="arrow")
            {
            
             this.setState(
                 {
                 arrow:!this.state.arrow
                 })
         }
         if(d=="info")
         {
         
          this.setState(
              {
              info:!this.state.info
              })
      }
      if(d=="preview")
      {
      
       this.setState(
           {
           preview:!this.state.preview
           })
   }
      
        }

        return (
        <div className="navbar">
<div className="nav-row">
    

<ArrowForwardIosIcon className="nav-icon arrow" fontSize="medium" onClick={this.props.arrow}/>
<div className="nav-notes">All Notes</div>
<PostAddIcon fontSize="medium" className="nav-icon post" onClick={this.props.addnote}/>
<div className="line"></div>
{this.props.toggler.arrow?(<Menu/>):(null)}

<div className="nav-right">
<FlipOutlinedIcon  className="nav-icon flip" fontSize="medium"   onClick={this.props.flip}/> 
<div className="emt"></div>
    {this.props.toggler.preview ?(<div className="eye">
    
    <VisibilityOffIcon className="nav-icon" fontSize="medium" onClick={this.props.preview}/>
 
    <span className="tooltip">preview</span>
    </div>
    
    ):(<div className="eye">
        <VisibilityIcon  className="nav-icon eye" fontSize="medium" onClick={this.props.preview}/>
        <span className="tooltip">preview</span>
        </div>
    )}
   
   <div className="info">
    <InfoIcon className="nav-icon info" fontSize="medium" onClick={this.props.info}/>
    <span className="tooltip">info</span></div>
    
    <div className="check">
    <PlaylistAddCheckIcon className="nav-icon check" fontSize="medium"  />
    <span className="tooltip">check</span></div>
    <div className="more">
    <MoreVertIcon className="nav-icon more" fontSize="medium" onClick={this.props.more}/>
    <span className="tooltip">more</span></div>
</div>

        </div>

        {this.props.toggler.info?(
                    <div className="div-text">
                    <span className="info-heading">Documents</span>
                <i class="fa fa-window-close close" aria-hidden="true" onClick={this.props.info}/>
                <hr className="txt-hr"/>
                <div className="window">
                <p class Name="modified"> Modified<span className="modified">
                    

                {/* {months[month]} , {year},  {day}    ,{md_date} */}
                May 18 2021 12.30 pm
                </span></p>
                <p className="created"> Created<span className="created">
                May 10 2021 11.30 pm
                {/* {months[c_month]} , {c_year},  {c_day}    ,{cd_date} */}
                    </span></p>
                <p className="words"> Words<span className="words">
                    10
                    {/* {words} */}
                    </span></p>
                <p className="char"> Characters<span className="char">
                    132
                    {/* {length} */}
                    </span></p>
                </div>
            
                </div>
                
        ):(<></>)}
             <Mainbar data={this.props.toggler.preview}/>




        </div>
        )
    }
}

const mapStateToProps=(state)=>{

      
    return {
           allnotes:state.notes,
           toggler:state.toggle


    }
}

const mapDispatchToprops=dispatch=>{


    return {
        preview:()=>dispatch(preview()),
        info:()=>dispatch(info()),
        check:()=>dispatch(check()),
        more:()=>dispatch(more()),
        flip:()=>dispatch(flip()),
        arrow:()=>dispatch(arrow()),
        addnote:()=>dispatch(addnote()),
        loadnotes:()=>dispatch(loadallnotes())


    }  

}



export default connect(mapStateToProps,mapDispatchToprops)(Navbar)

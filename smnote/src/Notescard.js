import React, { Component } from 'react'
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import StarIcon from '@material-ui/icons/Star';
import { loadsepcificnote} from './actions/detailsaction';
import { connect} from 'react-redux';

class Notescard extends Component {

    constructor(props) {
        super(props)
        {
            this.state={
                w:""
            }

        }
    }
        
        
    




    setactive=()=>{


        
        window.id=this.props.data._id

        this.props.load_note(this.props.data._id)


    }


    render() {

        let month=""
        let year=""
        let day=""
        let ad=""
        let firstline=""
        let secondline=""
        
            if(this.props.data)
            {
             firstline=(this.props.data.data).substring(0,30)
             secondline=(this.props.data.data).substring(30,50)
            
             const modified=(this.props.data.modified).substring(0,19)
            const m=new Date(modified)
            day=m.getDate()
            month=m.getMonth()
             year=m.getFullYear()
            const hr=m.getHours()
            const mins=m.getMinutes()
            var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
            var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
            const date=(new Date(year,month,day,hr,mins)).toLocaleString()
            
             ad=date.substring(10,25)
    
            } 
        



    
        



        return (

            

            <div>
                {this.props.data?(

<div className={`notes ${window.id===this.props.data._id&&"active"}`} onClick={this.setactive.bind(this)}  >
{/* <div className={"notes active"} onClick={()=>console.log("hh")}  >  */}

      {!this.props.data.pinned?(
            <GradeOutlinedIcon className="star"/> 
    
     ):(
         <StarIcon className="star-fill" />
     )} 
    
    <div className="card">
           <h3 className="card-head">
               {firstline}

               </h3>
           <br/>
           <p className="card-p">
               {secondline}
               </p>
           <small className="note-meta ">Last Modify [date]:-  
           
            {months[month]} , {year},  {day}    ,{ad}
           </small>
           </div>

     
     
 </div>
                ):(

                    null

                )}
            
            </div>
        )
    }
}


const mapDispatchToprops=dispatch=>{


    return {

        load_note:(id)=>dispatch(loadsepcificnote(id)),


    }  

}


export default connect(null,mapDispatchToprops)(Notescard)

// const Notescard = ({data}) => {

//     const dispatch=useDispatch()

//     let firstline=""
//     let secondline=""

//     if(data.data)
//     {
//      firstline=(data.data).substring(0,30)
//      secondline=(data.data).substring(30,100)

//     }



//     const modified=(data.modified).substring(0,19)
//     const m=new Date(modified)
//     const day=m.getDate()
//     const month=m.getMonth()
//     const year=m.getFullYear()
//     const hr=m.getHours()
//     const mins=m.getMinutes()



//     var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
//     var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    
//     const date=(new Date(year,month,day,hr,mins)).toLocaleString()

//     const ad=date.substring(10,25)
    

//     const setactive=(id)=>{
//         window.id=id
//         console.log(window.id);
//         dispatch(loadsepcificnote(window.id))
        


//     }

    
//     return (
//         <div className={`notes ${window.id===data._id&&"active"}`} onClick={()=>setactive(data._id)}  >
//              {!data.pinned?(
//                    <GradeOutlinedIcon className="star" onClick={()=>dispatch(flip_pinned(window.id,data.pinned))}/> 
           
//             ):(
//                 <StarIcon className="star-fill" onClick={()=>dispatch(flip_pinned(window.id,data.pinned))}/>
//             )} 
           
//             <div className="card">
//             <h3 className="card-head">{firstline}</h3>
//             <br/>
//             <p className="card-p">{secondline}</p>
//             <small className="note-meta ">Last Modify [date]:-   {months[month]} , {year},  {day}    ,{ad}
//             </small>
//             </div>
            
            
//         </div>
//     )
// }

// export default Notescard

import React, { Component } from 'react'
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import StarIcon from '@material-ui/icons/Star';
import { loadsepcificnote,flip_pinned } from './actions/detailsaction';
import { connect, useDispatch, useSelector } from 'react-redux';



class notescard extends Component {


    constructor(props) {
        super(props)
        {
        }
    }


    render() {

        let firstline=""
        let secondline=""
        
            if(this.props.data.data)
            {
             firstline=(this.props.data.data).substring(0,30)
             secondline=(this.props.data.data).substring(30,100)
        
            }
        
        
        
            const modified=(this.props.data.modified).substring(0,19)
            const m=new Date(modified)
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
                
             this.props.load_note(window.id)
        
            }
        return (
            <div className={`notes ${window.id===this.props.data._id&&"active"}`} onClick={()=>setactive(this.props.data._id)}  >
            {!this.props.data.pinned?(
                  <GradeOutlinedIcon className="star" onClick={()=>this.props.flip_toggle(this.props.data._id,this.props.data.pinned)}/> 
          
           ):(
               <StarIcon className="star-fill" />
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

    
    
}
const mapDispatchToprops=dispatch=>{


    return {
        flip_toggle:(id,data)=>dispatch(flip_pinned(id,data)),
        load_note:(id)=>dispatch(loadsepcificnote(id))
    }



    

}




export default connect(null,mapDispatchToprops)(notescard)


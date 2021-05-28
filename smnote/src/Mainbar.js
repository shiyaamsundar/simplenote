import React, { Component, useEffect } from 'react'
import ReactMarkdown from "react-markdown";
import Tags from './Tags';
import { loadsepcificnote, savenote} from './actions/detailsaction';
import { connect} from 'react-redux';
import { SettingsEthernet } from '@material-ui/icons';



 class Mainbar extends Component {

    constructor(props) {
        super(props)
        {

            this.state={
                data:"",
            
            }
        }
           }


    


    componentDidUpdate(prevProps){
        
        if(prevProps.note)
        {
        if(window.id!=prevProps.note._id)
        {
            this.setState({
                data:this.props.note.data
            })

        }
        }
       else if(this.props && window.id && !prevProps.note)
        {
            this.setState({
                data:this.props.note.data
            })
        }

    }


    handlechange=(e)=>{

        
        this.setState({
            data:e.target.value
        })
    }

    render() {
       


    
        return (
            <div className="simple-note-main">
    
                {!this.props.toggle.preview?(
                     <div className="main-container">
                     <div className="empty-spacing"></div>
                 <textarea className="body" placeholder="write your note" id="data" value={this.state.data} onChange={this.handlechange}  style={{border: "none"}}>
                     
                      
     
                 </textarea>

                 <Tags/>
                 <button className="main-save-btn" onClick={()=>this.props.save(this.props.active_id,this.state.data)}>save</button>
                 
                 </div>
                ):(<div className="empty-spacing">
    
                    <h3>Markdown Preview:-</h3>
                    <br/><br/>
                    <ReactMarkdown >{this.state.data}</ReactMarkdown>
            
                </div>)}
    
               
        
    
    
                <div className="container">
                    <h3></h3>
    
                </div>
            </div>
        
    )
    }
}

const mapStateToProps=(state)=>{

      
    return {
           note:state.notes.note,
           toggle:state.toggle,
           active_id:state.notes.active_note_id

    }
}

const mapDispatchToprops=dispatch=>{


    return {
        save:(id,data)=>dispatch(savenote(id,data)),

    }  

}



export default connect(mapStateToProps,mapDispatchToprops)(Mainbar)
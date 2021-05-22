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
            console.log("const",);
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
        console.log(e.target.value);
        
        this.setState({
            data:e.target.value
        })
    }

    render() {
       
        // console.log(window.id,this.props.note._id,"id");


    
        return (
            <div className="main">
    
                {!this.props.toggle.preview?(
                     <div className="container">
                     <div className="spc"></div>
                 <textarea className="body" placeholder="write your note" id="data" value={this.state.data} onChange={this.handlechange}  style={{border: "none"}}>
                     
                      
     
                 </textarea>

                 <Tags/>
                 <button className="btn" onClick={()=>this.props.save(this.state.data)}>save</button>
                 
                 </div>
                ):(<div className="spc">
    
                    <h3>Markdown Preview:-</h3>
                    <br/><br/>
                    <ReactMarkdown className="mm">{this.state.data}</ReactMarkdown>
            
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
           toggle:state.toggle

    }
}

const mapDispatchToprops=dispatch=>{


    return {
        save:(data)=>dispatch(savenote(window.id,data)),

    }  

}



export default connect(mapStateToProps,mapDispatchToprops)(Mainbar)
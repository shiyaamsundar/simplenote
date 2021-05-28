import React, { Component } from 'react'
import Notescard from './Notescard'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { connect} from 'react-redux';
import { addnote, loadallnotes,loadsearchnotes } from './actions/detailsaction';


class Sidebar extends Component {


    constructor(props) {
        super(props)
        {
            this.state={
                search:""
            }

        }
    }

    handlechange=(e)=>{

        
        this.setState({
            search:e.target.value
        })


        this.props.searchnotes(this.state.search)

        


    }


    componentDidMount(){
        this.props.loadnotes()
    }

    componentDidUpdate(){
        console.log("did update");
    }

    

    render() {




        return (
        <div className="simple_note_sidebar">



            
            <div className="search">         
            <SearchOutlinedIcon size="medium" className="side-icon"  />
            <input type="text" placeholder="search notes and tags" className="search-p" value={this.state.search} onChange={this.handlechange} ></input></div>
            <div>
                
            {!this.state.search?(
                <>
                {
                   this.props.allnotes.allnotes.map((data,i)=>{
                        return (
                    <Notescard  index={i} data={data} />
                        )

                   })

               }
                </>
            ):(<>
            {
                   this.props.searchednotes.map((data,i)=>{
                        return (
                    <Notescard  index={i} data={data} />
                        )

                   })

               }
            
            </>)}

               

                
            </div>
            
        </div>
    )
    }
}
 

const mapStateToProps=(state)=>{


      
    return {
           allnotes:state.notes,
           searchednotes:state.notes.searchnotes

    }
}

const mapDispatchToprops=dispatch=>{


    return {
        loadnotes:()=>dispatch(loadallnotes()),
        searchnotes:(data)=>dispatch(loadsearchnotes(data))


    }  

}


export default connect(mapStateToProps,mapDispatchToprops)(Sidebar)
import React, { Component } from 'react'
import NotesOutlinedIcon from '@material-ui/icons/NotesOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { connect} from 'react-redux';
import { addnote, loadallnotes } from './actions/detailsaction';


class Menu extends Component {




    render() {




        return (
            <div className="menu">
                <p className="menu-txt ">All notes <NotesOutlinedIcon className="menu-icon"/></p>
                <hr className="menu-hr"/>
                <p className="menu-txt trash">Trash<DeleteForeverOutlinedIcon className="menu-icon trash-icon"/></p>
                <hr className="menu-hr"/>
                <p className="menu-txt settings">Settings<SettingsOutlinedIcon className="menu-icon settings-icon"/></p>
                <hr className="menu-hr"/>
    
                <div className="menu-tags">
                    <p className="m-tags-txt">Tags    <span className="tags-edit">Edit</span></p>
                    {/* <hr className="menu-hr"/> */}
                    
                    {this.props.note?(

                                
                                    this.props.note.tags.map((data,i)=>{
                                    return (
                                        
                                <div inde>
                                <p className="menu-txt ">{data}</p>
                                <hr className="menu-hr"/>
                                </div>

                                    )

                                })
                                

                    ):(null)}

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



export default connect(mapStateToProps)(Menu)
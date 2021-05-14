import React from 'react'
import NotesOutlinedIcon from '@material-ui/icons/NotesOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import LabelOffOutlinedIcon from '@material-ui/icons/LabelOffOutlined';

const Menu = () => {
    return (
        <div className="menu">
            <p className="menu-txt notes">All notes <NotesOutlinedIcon className="menu-icon"/></p>
            <hr className="menu-hr"/>
            <p className="menu-txt trash">Trash<DeleteForeverOutlinedIcon className="menu-icon trash-icon"/></p>
            <hr className="menu-hr"/>
            <p className="menu-txt settings">Steeings<SettingsOutlinedIcon className="menu-icon settings-icon"/></p>
            <hr className="menu-hr"/>

            <div className="menu-tags">
                <p className="m-tags-txt">Tags    <span className="tags-edit">Edit</span></p>
                {/* <hr className="menu-hr"/> */}
                <div>
                <p className="menu-txt ">User</p>
            <hr className="menu-hr"/>
                </div>
                <div>
                <p className="menu-txt ">User</p>
            <hr className="menu-hr"/>
                </div>
                <div>
                <p className="menu-txt ">User</p>
            <hr className="menu-hr"/>
                </div>
                </div> 


                 

        </div>
    )
}

export default Menu

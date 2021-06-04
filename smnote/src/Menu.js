import React, { Component } from "react";
import NotesOutlinedIcon from "@material-ui/icons/NotesOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { connect } from "react-redux";
import { addnote, loadallnotes } from "./actions/detailsaction";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <p className="menu-txt ">
          All notes <NotesOutlinedIcon className="menu-icon" />
        </p>

        <p className="menu-txt trash">
          Trash
          <DeleteForeverOutlinedIcon className="menu-icon trash-icon" />
        </p>
        <p className="menu-txt settings">
          Settings
          <SettingsOutlinedIcon className="menu-icon settings-icon" />
        </p>

        <div className="menu-tags">
          <p className="menu-tags-txt">
            Tags <span className="tags-edit">Edit</span>
          </p>
          <div className="menu-tag-list">
            {this.props.note &&
              this.props.note.tags.map((data, i) => {
                return (
                  <div index={i}>
                    <p className="menu-txt ">{data}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    note: state.notes.note,
    toggle: state.toggle,
  };
};

export default connect(mapStateToProps)(Menu);

import React, { Component } from "react";
import GradeOutlinedIcon from "@material-ui/icons/GradeOutlined";
import StarIcon from "@material-ui/icons/Star";
import { loadsepcificnote, flip_pinned } from "./actions/detailsaction";
import { connect } from "react-redux";
import { findtime } from "./functions/findDate";

class Notescard extends Component {
  constructor(props) {
    super(props);
    {
    }
  }

  setactive = () => {
    this.props.load_note(this.props.data._id);
  };

  setpinned = () => {
    this.props.flip(this.props.data._id, this.props.data.pinned);
  };

  render() {
    let modified_date = findtime(this.props.data.modified);

    let firstLine = "";
    let secondLine = "";

    if (this.props.data) {
      firstLine = this.props.data.data.substring(0, 30);

      secondLine = this.props.data.data.substring(20, 40);
    }

    return (
      <div
        className={`notes ${
          this.props.active_id === this.props.data._id && "active"
        }`}
        onClick={this.setactive.bind(this)}
      >
        {!this.props.data.pinned ? (
          <GradeOutlinedIcon
            className="star"
            onClick={this.setpinned.bind(this)}
          />
        ) : (
          <StarIcon className="star-fill" onClick={this.setpinned.bind(this)} />
        )}

        <div className="card">
          <h3 className="card-firstline">{firstLine}</h3>
          <br />
          <p className="card-secondline">{secondLine}</p>
          <small className="note-meta ">
            Last Modify :-
            {modified_date}
          </small>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    active_id: state.notes.active_note_id,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    load_note: (id) => dispatch(loadsepcificnote(id)),
    flip: (id, data) => dispatch(flip_pinned(id, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(Notescard);

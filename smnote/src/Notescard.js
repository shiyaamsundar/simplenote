import React, { Component } from "react";
import GradeOutlinedIcon from "@material-ui/icons/GradeOutlined";
import StarIcon from "@material-ui/icons/Star";
import { loadsepcificnote, flip_pinned } from "./actions/detailsaction";
import { connect } from "react-redux";

class Notescard extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        w: "",
      };
    }
  }

  setactive = () => {
    window.id = this.props.data._id;
    this.props.load_note(this.props.data._id);
  };

  setpinned = () => {
    console.log(this.props.data._id);
    this.props.flip(this.props.data._id, this.props.data.pinned);
  };

  render() {
    let month = "";
    let year = "";
    let day = "";
    let ad = "";
    let firstline = "";
    let secondline = "";
    let hr = "";
    let mins = "";
    let sec = "";
    let zone = "AM";

    if (this.props.data) {
      firstline = this.props.data.data.substring(0, 30);

      secondline = this.props.data.data.substring(20, 40);

      const modified = this.props.data.modified.substring(0, 19);
      const m = new Date(modified);
      day = m.getDate();
      month = m.getMonth();
      year = m.getFullYear();
      hr = m.getHours();
      mins = m.getMinutes();
      sec = m.getSeconds();

      if (hr > 12) {
        hr = hr - 12;
        zone = "PM";
      }

      var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const date = new Date(year, month, day, hr, mins).toLocaleString();
      ad = date.substring(10, 25);
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
          <h3 className="card-head">{firstline}</h3>
          <br />
          <p className="card-p">{secondline}</p>
          <small className="note-meta ">
            Last Modify :-
            {months[month]} , {year}, {day} ,{hr} :{mins}: {sec} {zone}
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

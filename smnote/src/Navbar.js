import React, { Component } from "react";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PostAddIcon from "@material-ui/icons/PostAdd";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import InfoIcon from "@material-ui/icons/Info";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FlipOutlinedIcon from "@material-ui/icons/FlipOutlined";
import Menu from "./Menu";
import { connect } from "react-redux";
import { preview, arrow, flip, more, check, info } from "./actions/actions";
import { addnote, loadallnotes } from "./actions/detailsaction";
import Mainbar from "./Mainbar";
import axios from "axios";

class Navbar extends Component {
  constructor(props) {
    super(props);
    {
    }
  }

  componentDidMount() {
    this.props.loadnotes();
  }

  render() {
    let m_month = "";
    let m_year = "";
    let m_day = "";
    let ad = "";

    let m_hr = "";
    let m_mins = "";
    let m_sec = "";
    let m_zone = "AM";

    let created = "";
    let c = "";
    let c_day = "";
    let c_month = "";
    let c_year = "";
    let c_hr = "";
    let c_mins = "";
    let c_sec = "";
    let c_zone = "AM";

    let words = 0;
    let length = 0;

    if (this.props.data) {
      const modified = this.props.data.modified.substring(0, 19);
      const m = new Date(modified);
      m_day = m.getDate();
      m_month = m.getMonth();
      m_year = m.getFullYear();
      m_hr = m.getHours();
      m_mins = m.getMinutes();
      m_sec = m.getSeconds();

      if (m_hr > 12) {
        m_hr = m_hr - 12;
        m_zone = "PM";
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

      created = this.props.data.modified;
      c = new Date(modified);
      c_day = c.getDate();
      c_month = c.getMonth();
      c_year = c.getFullYear();
      c_hr = c.getHours();
      c_mins = c.getMinutes();
      c_sec = m.getSeconds();

      if (c_hr > 12) {
        c_hr -= 12;
        c_zone = "PM";
      }

      function countWords(str) {
        if (window.id && str) {
          str = str.replace(/(^\s*)|(\s*$)/gi, "");
          str = str.replace(/[ ]{2,}/gi, " ");
          str = str.replace(/\n /, "\n");
          return str.split(" ").length;
        } else {
          return 0;
        }
      }

      words = countWords(this.props.data.data);
      length = this.props.data.data.length;
    }

    const handletoggle = (d) => {
      if (d == "arrow") {
        this.setState({
          arrow: !this.state.arrow,
        });
      }
      if (d == "info") {
        this.setState({
          info: !this.state.info,
        });
      }
      if (d == "preview") {
        this.setState({
          preview: !this.state.preview,
        });
      }
    };

    return (
      <div className="simple_note_navbar">
        <div className="nav-row">
          <ArrowForwardIosIcon
            className="nav-icon arrow"
            fontSize="medium"
            onClick={this.props.arrow}
          />
          <div className="nav-notes">All Notes</div>
          <PostAddIcon
            fontSize="medium"
            className="nav-icon post"
            onClick={this.props.addnote}
          />
          <div className="line"></div>
          {this.props.toggler.arrow ? <Menu /> : null}

          <div className="nav-right">
            <FlipOutlinedIcon
              className="nav-icon flip"
              fontSize="medium"
              onClick={this.props.flip}
            />
            <div className="emt"></div>
            {this.props.toggler.preview ? (
              <div className="eye">
                <VisibilityOffIcon
                  className="nav-icon"
                  fontSize="medium"
                  onClick={this.props.preview}
                />

                <span className="tooltip">preview</span>
              </div>
            ) : (
              <div className="eye">
                <VisibilityIcon
                  className="nav-icon eye"
                  fontSize="medium"
                  onClick={this.props.preview}
                />
                <span className="tooltip">preview</span>
              </div>
            )}

            <div className="info">
              <InfoIcon
                className="nav-icon info"
                fontSize="medium"
                onClick={this.props.info}
              />
              <span className="tooltip">info</span>
            </div>

            <div className="check">
              <PlaylistAddCheckIcon
                className="nav-icon check"
                fontSize="medium"
              />
              <span className="tooltip">check</span>
            </div>
            <div className="more">
              <MoreVertIcon
                className="nav-icon more"
                fontSize="medium"
                onClick={this.props.more}
              />
              <span className="tooltip">more</span>
            </div>
          </div>
        </div>

        {this.props.toggler.info ? (
          <div className="div-text">
            <span className="info-heading">Documents</span>
            <i
              class="fa fa-window-close close"
              aria-hidden="true"
              onClick={this.props.info}
            />
            <hr className="txt-hr" />
            <div className="window">
              <p class Name="modified">
                {" "}
                Modified
                <span className="modified-span">
                  {m_month != null ? months[m_month] : null} ,{m_year}, {m_day}{" "}
                  ,{m_hr}:{m_mins}:{m_sec} {m_zone}
                </span>
              </p>
              <p className="created">
                {" "}
                Created
                <span className="created-span">
                  {c_month != null ? months[c_month] : null} ,{c_year}, {c_day}{" "}
                  ,{c_hr}:{c_mins}:{c_sec} {c_zone}
                </span>
              </p>
              <p className="words">
                {" "}
                Words<span className="words">{words}</span>
              </p>
              <p className="char">
                {" "}
                Characters<span className="char">{length}</span>
              </p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allnotes: state.notes,
    toggler: state.toggle,
    data: state.notes.note,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    preview: () => dispatch(preview()),
    info: () => dispatch(info()),
    check: () => dispatch(check()),
    more: () => dispatch(more()),
    flip: () => dispatch(flip()),
    arrow: () => dispatch(arrow()),
    addnote: () => dispatch(addnote()),
    loadnotes: () => dispatch(loadallnotes()),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(Navbar);

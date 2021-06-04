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
import { findtime } from "./functions/findDate";
import { countWords } from "./functions/countwords";

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
    let words = 0;
    let length = 0;
    let createdAt = "";
    let modifiedAt = "";

    if (this.props.data && this.props.toggler.info) {
      words = countWords(this.props.data.data);

      length = this.props.data.data.length;
      createdAt = findtime(this.props.data.created);
      modifiedAt = findtime(this.props.data.modified);
    }

    return (
      <div>
        <div className="nav-bar">
          <div className="flex-items sidenav-bar">
            <ArrowForwardIosIcon
              className="nav-icon flex-items arrow"
              fontSize="medium"
              onClick={this.props.arrow}
            />
            <div className="flex-items nav-notes">All notes</div>
            <PostAddIcon
              fontSize="medium"
              className="nav-icon post flex-items"
              onClick={this.props.addnote}
            />
          </div>
          {this.props.toggler.arrow && <Menu />}
          <div className="flex-items mainnav-bar">
            <div className="row1">
              <div className="eye flexbox-item">
                <FlipOutlinedIcon
                  className="nav-icon"
                  fontSize="medium"
                  onClick={this.props.flip}
                />
                <span className="tooltip">toggle</span>
              </div>
            </div>
            <div className="row2">
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
                  onClick={this.props.check}
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
        </div>

        {this.props.toggler.info && (
          <div className="info-container">
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
                <span className="modified-span"></span>
                {modifiedAt}
              </p>
              <p className="created">
                {" "}
                Created
                <span className="created-span"></span>
                {createdAt}
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

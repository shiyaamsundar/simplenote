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

const Navflex = () => {
  return (
    <div className="main">
      <div className="col-1">a</div>
      <div className="col-2">b</div>
    </div>
  );
};

export default Navflex;

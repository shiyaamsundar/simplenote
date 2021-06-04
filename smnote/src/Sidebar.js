import React, { Component } from "react";
import Notescard from "./Notescard";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { connect } from "react-redux";
import {
  addnote,
  loadallnotes,
  loadsearchnotes,
} from "./actions/detailsaction";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        search: "",
        searchlist: {},
      };
    }
  }

  setSearchlist = (e) => {
    let s = this.props.allnotes.allnotes.filter((data) => {
      // return data.tags.indexOf(this.state.search) >= 0;
      let j = 0;
      for (let i = 0; i < data.tags.length; i++) {
        j = 0;
        if (data.tags[i].includes(e)) {
          return true;
        }
      }
    });
    this.setState({
      searchlist: s,
    });
  };

  handlechange = (e) => {
    this.setState({
      search: e.target.value,
    });
    this.setSearchlist(e.target.value);
  };

  render() {
    return (
      <div className="simple_note_sidebar">
        <div className="search">
          <SearchOutlinedIcon size="medium" className="side-icon" />
          <input
            type="text"
            placeholder="search notes and tags"
            className="search-input-txt"
            value={this.state.search}
            onChange={this.handlechange}
          ></input>
        </div>
        <div>
          {!this.state.search ? (
            <>
              {this.props.allnotes.allnotes.map((data, i) => {
                return <Notescard index={i} data={data} />;
              })}
            </>
          ) : (
            <>
              {this.state.searchlist.map((data, i) => {
                return <Notescard index={i} data={data} />;
              })}
            </>
          )}
          <div className="side-bar-bottom-spacing"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allnotes: state.notes,
    searchednotes: state.notes.searchnotes,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    loadnotes: () => dispatch(loadallnotes()),
    searchnotes: (data) => dispatch(loadsearchnotes(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(Sidebar);

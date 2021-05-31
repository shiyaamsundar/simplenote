import axios from "axios";

const url = "http://localhost:5000/api/";

export const loadallnotes = () => async (dispatch) => {
  const allnotes = await axios.get(`${url}/allnotesordered`);

  dispatch({
    type: "GET_ALL_NOTES",
    payload: {
      allnotes: allnotes.data,
    },
  });
};

export const loadsearchnotes = (data) => async (dispatch) => {
  const allnotes = await axios.get(`${url}/search?name=${data}`);

  dispatch({
    type: "SEARCH",
    payload: {
      searchnotes: allnotes.data,
    },
  });
};

export const loadsepcificnote = (id) => async (dispatch) => {
  const note = await axios.get(`${url}/note/${id}`);

  dispatch({
    type: "SPECIFIC_NOTE",
    payload: {
      note: note.data,
    },
  });

  // dispatch({
  //   type: "ACTIVE_NOTE",
  //   payload: {
  //     data: note.data.data._id,
  //   },
  // });
};

export const addnote = () => async (dispatch) => {
  const note = await axios.post(`${url}/create`, {
    data: "",
    status: 200,
  });

  dispatch({
    type: "ADD_NOTE",
    payload: {
      note: note.data,
    },
  });

  // dispatch({
  //   type: "ACTIVE_NOTE",
  //   payload: {
  //     data: note.data._id,
  //   },
  // });

  const allnotes = await axios.get(`${url}/allnotesordered`);
  dispatch({
    type: "GET_ALL_NOTES",

    payload: {
      allnotes: allnotes.data,
    },
  });
};

export const savenote = (id, data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const update = await axios.put(`${url}/updatenotes/${id}`, { data, config });

  const note = await axios.get(`${url}/note/${id}`);
  dispatch({
    type: "SPECIFIC_NOTE",
    payload: {
      note: note.data,
    },
  });

  const allnotes = await axios.get(`${url}/allnotesordered`);

  dispatch({
    type: "GET_ALL_NOTES",
    payload: {
      allnotes: allnotes.data,
    },
  });
};

export const savetags = (id, tags) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const update = await axios.put(`${url}/updatenotes/${id}`, { tags, config });

  const note = await axios.get(`${url}/note/${id}`);
  dispatch({
    type: "SPECIFIC_NOTE",
    payload: {
      note: note.data,
    },
  });

  const allnotes = await axios.get(`${url}/allnotesordered`);

  dispatch({
    type: "GET_ALL_NOTES",
    payload: {
      allnotes: allnotes.data,
    },
  });
};

export const flip_pinned = (id, p) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const pinned = !p;
  const update = await axios.put(`${url}/updatenotes/${id}`, {
    pinned,
    config,
  });

  dispatch({
    type: "FLIP_PINNED",
    payload: {
      note: update,
    },
  });

  const allnotes = await axios.get(`${url}/allnotesordered`);

  dispatch({
    type: "GET_ALL_NOTES",
    payload: {
      allnotes: allnotes.data,
    },
  });
};

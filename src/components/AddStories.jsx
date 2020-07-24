import React, { useState, useEffect, useRef } from "react";
import firebaseDb from "../config/firebase";
import { TextField, Button, Container } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import "./add.css";

const ContactForm = (props) => {
  const editor = useRef(null);
  const initialFieldValues = {
    data: "",
  };
  //   props.x = initialFieldValues.data;

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };
  var [content, setContent] = useState(initialFieldValues);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setContent({
      ...content,
      [name]: value,
    });
  };

  const addOrEdit = (obj) => {
    firebaseDb.child("contacts").push(obj, (err) => {
      if (err) {
        console.log(err);
      }
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addOrEdit(content);
  };
  if (initialFieldValues.data.length != 0) {
    props.page = "yes";
  }
  console.log(initialFieldValues.data);
  return (
    <Container>
      <form autoComplete="off" onSubmit={handleFormSubmit}>
        {/* <input
        className="form-control"
        name="data"
        placeholder="data"
        value={content.data}
        onChange={handleInputChange}
      /> */}
        <AppBar position="fixed" style={{ backgroundColor: "#512DA8" }}>
          <Toolbar>
            <Link to="/">
              <IconButton edge="start" color="inherit" aria-label="menu">
                <ArrowBackIcon />
              </IconButton>
            </Link>
            <Typography variant="h5">Stories</Typography>
          </Toolbar>
        </AppBar>
        <TextField
          id="outlined-basic"
          label="Add Story"
          variant="outlined"
          name="data"
          placeholder="Write your story here..."
          value={content.data}
          onChange={handleInputChange}
          className="editor"
          multiline={true}
          rows={20}
        />
        <Button
          variant="contained"
          type="submit"
          value="Add"
          color="primary"
          className="btn"
        >
          Add
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;

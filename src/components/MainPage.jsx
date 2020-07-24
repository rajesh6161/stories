import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import "./main.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";
import firebaseDb from "../config/firebase";
import { Container } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  root: {
    minWidth: 355,
    marginBottom: 30,
    backgroundColor: "#9E9E9E",
  },
  head: {
    flexGrow: 1,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  var [story, setStory] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    firebaseDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setStory({
          ...snapshot.val(),
        });
      }
    });
    if (story.length != 0) {
      handleToggle();
    }
  }, []);
  return (
    <div>
      {/* <div className="bar">
        <Typography style={{ marginLeft: "20px" }} variant="h5">
          Stories
        </Typography>
      </div> */}
      <AppBar position="fixed" style={{ backgroundColor: "#512DA8" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.head}>
            Stories
          </Typography>
          <Link to="/add">
            <Fab color="secondary" aria-label="add" size="small">
              <AddIcon />
            </Fab>
          </Link>
        </Toolbar>
      </AppBar>

      <Container className="main">
        <Backdrop
          className={classes.backdrop}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        {Object.keys(story).map((key) => {
          return (
            <Card className={classes.root}>
              <CardContent>
                <Typography>{story[key].data}</Typography>
              </CardContent>
              <Divider />
            </Card>
          );
        })}
      </Container>
    </div>
  );
}

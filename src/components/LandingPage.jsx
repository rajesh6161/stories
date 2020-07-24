import React from "react";
import { Container, Button } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./LandingPage.css";
import ReactTypingEffect from "react-typing-effect";

const LandingPage = () => {
  function myFunction() {
    // OPEN NEW TAB
    window.open("https://www.yahoo.com", "_blank");
    // THEN REDIRECT THIS PAGE
    window.location = "https://www.google.com";
  }
  function myFb() {
    // OPEN NEW TAB
    window.open("https://www.facebook.com", "_blank");
    // THEN REDIRECT THIS PAGE
    window.location = "https://www.google.com";
  }
  return (
    <Container maxWidth="sm">
      <div className="main">
        <div className="layer">
          <div className="bar">
            <div className="box-1">
              <p
                style={{
                  fontSize: "18px",
                  color: "#fff",
                  paddingLeft: "15px",
                  paddingTop: "8px",
                }}
              >
                Create.
              </p>
            </div>
            <div className="box-2">
              <i
                style={{ fontSize: "18px", color: "#fff" }}
                className="fab fa-slack"
              ></i>
            </div>
          </div>
          <h1 className="type">
            <ReactTypingEffect text="Write Your Stories" />
            <br />
            <i className="fas fa-heart"></i>
          </h1>
        </div>
      </div>
      <div className="footer">
        <h3 style={{ fontWeight: "400", color: "#fff", marginLeft: "10px" }}>
          Continue using...
        </h3>

        <Button
          variant="contained"
          className="ig"
          startIcon={<InstagramIcon />}
          onClick={myFunction}
        >
          {/* <a href="https://www.instagram.com" target="_blank">
            Instagram
          </a> */}
          Instagram
        </Button>
        <Button
          variant="contained"
          className="fb"
          startIcon={<FacebookIcon />}
          onClick={myFb}
        >
          Facebook
        </Button>
      </div>
    </Container>
  );
};

export default LandingPage;

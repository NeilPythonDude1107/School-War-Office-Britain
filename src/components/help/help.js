import React, { useState } from "react";
import "./help.css";
import { Navbar, Nav } from "react-bootstrap";

const Help = () => {
  const [image, setImage] = useState("draco.png");
  const [text, setText] = useState(
    `Think of us, as Draco the dragon. Our exteriors being fire-breathing mouths, tough skin, are our armed forces. The dragon's interiors, the ones that supply the exteriors, is us, the citizens. Without us, none of the dragon's exteriors can work. That's why we need everyone to contribute, one way or another, to win this war. But the good news is, that everybody can help. Whether it's by joining the armed forces, by growing your own vegetables, by donating food or metal, or simply by remaining on the lookout for spies every time you go out, you are contributing to the nation. If you want to help more, visit the contribute page!, otherwise, please follow the guidelines to the best of your capability. Stay safe!`
  );
  const bunkersChange = async (e) => {
    await setImage("bunkers.jpg");
    await setText('')
  };
  const dracoChange = async (e) => {
    await setImage("draco.png");
    await setText(
      `Think of us, as Draco the dragon. Our exteriors being fire-breathing mouths, tough skin, are our armed forces. The dragon's interiors, the ones that supply the exteriors, is us, the citizens. Without us, none of the dragon's exteriors can work. That's why we need everyone to contribute, one way or another, to win this war. But the good news is, that everybody can help. Whether it's by joining the armed forces, by growing your own vegetables, by donating food or metal, or simply by remaining on the lookout for spies every time you go out, you are contributing to the nation. If you want to help more, click <a href="contribute.html">here</a>, otherwise, please follow the guidelines to the best of your capability. Stay safe!`
    );
  };
  const rafChange = async (e) => {
    await setImage("rafmap.png");
    await setText('')
  };

  return (
    <div class="help">
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        fixed="top"
        style={{ background: "wheat" }}
      >
        <a href="/" class="navbar-brand">
          War Office
        </a>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <a href="/#home" className="nav-link">
              Home
            </a>
            <a href="/#timeline" className="nav-link">
              Updates
            </a>
            <a href="/help" className="nav-link">
              Help
            </a>
            <a href="/contribute" className="nav-link">
              Contribute
            </a>
            <a href="/#posters" className="nav-link">
              Posters
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div class="bg-img">
        <img
          src={image ? image : <h1>Loading...</h1>}
          className="bg__image"
          id="help__bg__image"
        />
        <div class="container__div">
          <div class="topnav">
            <a href="#" onClick={dracoChange}>
              Draco The Dragon
            </a>
            <a href="#" onClick={bunkersChange}>
              Bunkers Map
            </a>
            <a href="#" onClick={rafChange}>
              RAF Bases
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div class="text">{text}</div>
    </div>
  );
};

export default Help;

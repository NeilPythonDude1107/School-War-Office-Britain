import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./contribute.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contribute = () => {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [fatherProfession, setFatherProfession] = useState("");
  const [segment, setSegment] = useState("");

  const submitForm = () => {
    const random = Math.floor(Math.random() * 99999999999);
    if (!age || !name || !profession || !fatherProfession || !segment) {
      return toast.error("Please fill all the fields!");
    }
    if (age < 15) {
      return toast.error("You must be atleast 15 to join the Armed Forces!");
    }
    if (segment === "--Select Your Segment--") {
      return toast.error("Please select a segment!");
    }
    if (segment === 'Supplies') {
      return toast.success('Signed Up Successfully! Please report to your nearest base for futher instruction on your supply role!')
    }
    return toast.success(
      "Signed Up Successfully! Please report to the nearest base for futher instructions. Your ID is " +
        random +
        "!"
    );
  };

  return (
    <div className="signup__div">
      <ToastContainer />
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
      <div>
        <div class="signup__form">
          <h4>Signup To Defend Your Country!</h4>
          <div id="alert-box"></div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Name</label>
            <input
              type="text"
              class="form-control"
              id="soldierName"
              placeholder="Name..."
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Your Age</label>
            <input
              type="number"
              class="form-control"
              id="soldierAge"
              placeholder="Age..."
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Current Profession</label>
            <input
              type="text"
              class="form-control"
              id="soldierProfession"
              placeholder="Profession..."
              onChange={(e) => setProfession(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Father's Profession</label>
            <input
              type="text"
              class="form-control"
              id="soldierFatherProfession"
              placeholder="Fathers Profession..."
              onChange={(e) => setFatherProfession(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Your Segment</label>
            <select
              class="form-control"
              id="soldierSegment"
              onChange={(e) => setSegment(e.target.value)}
            >
              <option>--Select Your Segment--</option>
              <option>Air Force (RAF)</option>
              <option>The Royal Navy</option>
              <option>The Army</option>
              <option>Supplies</option>
            </select>
          </div>
          <div class="form-group">
            <button
              type="submit"
              class="btn btn-primary signup__button"
              onClick={submitForm}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contribute;

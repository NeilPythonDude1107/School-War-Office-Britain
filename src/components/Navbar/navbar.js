import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import $ from 'jquery'

const TopNavbar = () => {
  $(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on("click", function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          }
        );
      } // End if
    });
  });
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        fixed="top"
        style={{ background: "wheat" }}
      >
        <a href="#home" class="navbar-brand">
          War Office
        </a>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#timeline" className="nav-link">
              Updates
            </a>
            <a href="/help" className="nav-link">
              Help
            </a>
            <a href="/contribute" className="nav-link">
              Contribute
            </a>
            <a href="#posters" className="nav-link">
              Posters
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default TopNavbar;

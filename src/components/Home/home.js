import React from "react";
import TopNavbar from "../Navbar/navbar";
import "./home.css";
import $ from "jquery";

const Home = () => {
  return (
    <div>
      <TopNavbar />
      <div className="container" id="home">
        <div className="content">
          <div className="heroes__box">
            <div className="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1018 1300"
                width="122"
                height="130"
                className="heroes__box__image"
              >
                <defs>
                  <image
                    width="1018"
                    height="1390"
                    id="img1"
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA/oAAAVuAQMAAAD/D9WNAAAAAXNSR0IB2cksfwAAAANQTFRF////p8QbyAAAAMRJREFUeJztwQEBAAAAgiD/r25IQAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwLsBvIwAAaqVRt8AAAAASUVORK5CYII="
                  />
                  <image
                    width="1018"
                    height="1299"
                    id="img2"
                  />
                </defs>
                <use id="Background" href="#img1" x="0" y="0" />
                <use id="Layer 1" href="#img2" x="0" y="0" />
              </svg>
              <h1 className="vov fade-in-up" id="title">
                The eWar Office
              </h1>
              <h3 className="subtitle vov fade-in-down">
                The Official website of the United Kingdoms for the WW2 War
                Effort
              </h3>
              {/* <img
                src="https://specials-images.forbesimg.com/imageserve/2638166/960x0.jpg?fit=scale"
                className="heroes__box__winston"
              /> */}
            </div>
          </div>
          <hr class="hr" />
          <div className="text__box">
            <div className="text">
              <h4 className="text__box__text">
                "The British Empire and the French Republic, linked together in
                their cause and in their need, will defend to the death their
                <br />
                native soil, aiding each other like good comrades to the utmost
                of their strength.
                <br />
                <br />
                "Even though large tracts of Europe and many old and famous
                states have fallen or may fall into the grip of the Gestapo and
                all <br />
                the odious apparatus of Nazi rule, we shall not flag or fail.
                <br />
                <br />
                "We shall go on to the end, we shall fight in France, we shall
                fight on the seas and oceans, we shall fight with growing
                <br />
                confidence and growing strength in the air, we shall defend our
                island, whatever the cost may be.
                <br />
                <br />
                "We shall fight on the beaches, we shall fight on the landing
                grounds, we shall fight in the fields and in the streets, we
                shall fight <br />
                in the hills; we shall never surrender,
                <br /> <br />
                and even if, which I do not for a moment believe, this island or
                a large part of it were subjugated and starving, then our Empire
                beyond the seas, armed and guarded by the British fleet, would
                carry on the struggle, until, in God's good time, the new world,{" "}
                <br />
                with all its power and might, steps forth to the rescue and the
                liberation of the old."
              </h4>
            </div>
            <div className="cool">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"
                className="text__box__image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
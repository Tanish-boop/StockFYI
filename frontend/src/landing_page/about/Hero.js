import React from "react";

function Hero() {
  return (
    <div className="container">

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            This project started on December 2025 with a simple idea to create a
            clean, easy-to-use platform that helps users understand and interact
            with financial markets without unnecessary complexity.
          </p>
          <p>
            The focus has always been on learning, transparency, and building
            reliable tools using modern web technologies.
          </p>
          <p>
            Every feature is designed with the end user in mind, keeping
            performance, usability, and clarity at the core of the experience.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            Along with the platform, this project also aims to promote financial
            awareness through documentation, examples, and community driven
            learning.
          </p>
          <p>
            It serves as a hands-on learning initiative, exploring real world
            concepts such as system design, APIs, data handling, and scalable
            architecture.
          </p>
          <p>
            This is an evolving project constantly improving, experimenting,
            and growing with new ideas and feedback.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

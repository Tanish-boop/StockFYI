import React from "react";

function Team() {
  return (
    <>
    <div className="row p-5 mb-5">
        <h1 className="fs-2 text-center border-bottom pb-5">
          We’re building a modern trading experience
          <br />
          powered by simplicity and technology.
        </h1>
      </div>

    <div className="container">
      <div className="row p-3 mt-5">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="assets/images/Myself image.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Tanish Thakare</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            This platform was bootstrapped and founded on Dec 2025, with the
            goal of simplifying investing and trading for everyone. It was built
            by understanding the real challenges faced by everyday traders and
            learners.
          </p>
          <p>
            He is the student of Computer Engineering at International Institute
            of Information Technology, Pune. He is passionate about building
            products that simplify complex financial concepts and empower users
            to take control of their financial future.
          </p>
          <p>Traveling and Exploring is his zen.</p>
          <p>
            Connect on{" "}
            <a href="https://www.linkedin.com/in/tanish-thakare-1b447a296">
              Linkedin
            </a>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Team;

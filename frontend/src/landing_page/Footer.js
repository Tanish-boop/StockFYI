import React from 'react'

function Footer() {

    return (    
       <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
  <div className="container border-top mt-5">
    <div className="row mt-5">
      <div className="col">
        <img src="assets/images/mylogo.png" style={{ width: "50%" ,}} />
        <p>
          &copy; 2026, Built by <strong>Tanish Thakare</strong>. All rights
          reserved.
        </p>
      </div>

      <div className="col" >
        <p>Project</p>
        <a href="" style={{ textDecoration: "None" }}>About this project</a>
        <br />
        <a href="" style={{ textDecoration: "None" }}>Features</a>
        <br />
        <a href="" style={{ textDecoration: "None" }}>Tech stack</a>
        <br />
        <a href="" style={{ textDecoration: "None" }}>Learning journey</a>
        <br />
        <a href="" style={{ textDecoration: "None" }}>Future roadmap</a>
        <br />
        <a href="" style={{ textDecoration: "None" }}>Open source</a>
        <br />
      </div>

      <div className="col"  style={{ textDecoration: "none" }}>
        <p>Support</p>
        <a href="" style={{ textDecoration: "None" }}>Contact developer</a>
        <br />
        <a href="" style={{ textDecoration: "None" }}>Report an issue</a>
        <br />
        <a href="" style={{ textDecoration: "None" }}>Documentation</a>
        <br />
        <a href="" style={{ textDecoration: "None" }}>FAQs</a>
        <br />
        <a href="" style={{ textDecoration: "None" }}>Resources</a>
        <br />
      </div>

      <div className="col"  style={{ textDecoration: "none" }}>
        <p>Account</p>
        <a href="" style={{ textDecoration: "None" }}>Create account</a>
        <br />
        <a href="" style={{ textDecoration: "None" }}>Login</a>
        <br />
        <a href="" style={{ textDecoration: "None" }}>Profile settings</a>
        <br />
      </div>
    </div>

    <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
      <p>
        This website is a personal project created by{" "}
        <strong>Tanish Thakare</strong> for learning and demonstration purposes.
        It is not affiliated with any real-world trading or financial platform.
      </p>

      <p>
        All data, features, and content shown on this platform are for
        educational use only. No real financial transactions or investments are
        carried out through this application.
      </p>

      <p>
        The objective of this project is to practice full-stack development,
        UI/UX design, and modern web technologies by building a realistic
        product-like experience.
      </p>

      <p>
        © 2024 Tanish Thakare. Designed, developed, and maintained as part of a
        personal learning portfolio.
      </p>
    </div>
  </div>
</footer>

    )

}

export default Footer;
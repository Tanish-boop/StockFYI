import React from 'react'
import { Link } from 'react-router-dom';

function NotFound() {

    return (    
       <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">404 Not Found</h1>
        <p>
          OOPS!!  Sorry the page you are looking for does not exist.
        </p>
        <button 
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        > <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>  Go to Home </Link>
        </button>
      </div>
    </div>
    )

}

export default NotFound;
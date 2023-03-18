import React from 'react'
import "./Signin.css"
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div>
      <div className="containerr">
        <h3>Sign In</h3>

        <input type="text" placeholder="Enter Email" className="form" />
        <input type="password" placeholder="Enter Password" className="form" />

        <div className="rows">
          <button>Submit</button>
        </div>
        <div>
          <Link to="/reg" className="inputs">New User</Link>
        </div>
      </div>
    </div>
  )
}

export default Signin

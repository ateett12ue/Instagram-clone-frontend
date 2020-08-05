import React from "react";
import {Link} from 'react-router-dom'

export default function Signup() {
  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2>Instagram</h2>
        <input type="text" placeholder="name"/>
        <input type="text" placeholder="email"/>
        <input type="text" placeholder="password"/>
        <button className="btn waves-effect #64b5f6 blue
 waves-light darken-1">
            Signup
        </button>
        <h5>
            <Link to="/signin">Already have an account ?</Link>
        </h5>
      </div>
    </div>
  );
}

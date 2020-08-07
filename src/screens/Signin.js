import React, { useState, useContext }  from "react";
import {Link, useHistory} from 'react-router-dom'
import M from "materialize-css"
import {UserContext} from "../App"

export default function Signin() {
  const {state, dispatch} = useContext(UserContext)
  const history = useHistory()
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const Postdata = () => {
    const url = "/signin"
    const emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!emailTest.test(email)){
      M.toast({html: "Invalid Email", classes:"#c62828 red darken-3"})
    }
    else{
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if(data.error){
          M.toast({html: data.error, classes:"#c62828 red darken-3"})
        }
        else{
          localStorage.setItem("jwt", data.token)
          localStorage.setItem("user", JSON.stringify(data.user))
          dispatch({type:"USER",payload:data.user})
          M.toast({html:"Signed In Successfully", classes:"#43a047 green darken-1"})
          history.push('/')
        }
      }).catch(err=>{
        console.log(err)
      })}
  };
  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2>Instagram</h2>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn waves-effect #64b5f6 blue
 waves-light darken-1"
        onClick={()=>Postdata()}
 >
            Signin
        </button>
        <h5>
            <Link to="/signup">Don't have an account ?</Link>
        </h5>
      </div>
    </div>
  );
}

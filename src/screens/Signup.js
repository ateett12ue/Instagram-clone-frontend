import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

export default function Signup() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState(undefined)
  useEffect(() => {
    if(url){
      uploadFields()
    }
  }, [url])
  const uploadPic = () =>{
    const data = new FormData();
    
    data.append("file", image);
    data.append("upload_preset", "instagram-clone-app");
    data.append("cloud_name", "ateet");
    fetch("https://api.cloudinary.com/v1_1/ateet/image/upload", {
      method: "post",
      body:data
    })
    .then(res=>res.json())
    .then(data=>{
      setUrl(data.url)
    })
    .catch(err=>{
      console.log(err)
    });
  }
  const uploadFields = () =>{
    const urlin = "/signup";
    const emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailTest.test(email)) {
      M.toast({ html: "Invalid Email", classes: "#c62828 red darken-3" });
    } else {
      fetch(urlin, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          password,
          email,
          pic : url
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            M.toast({ html: data.error, classes: "#c62828 red darken-3" });
          } else {
            M.toast({ html: data.message, classes: "#43a047 green darken-1" });
            history.push("/signin");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  const Postdata = () => {
    if(image){
      uploadPic()
    }
    else{
      uploadFields()
    }
  };

  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2>Instagram</h2>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="file-field input-field">
          <div className="btn #64b5f6 blue darken-1">
            <span>Upload Profile Image</span>
            <input
              type="file"
              placeholder="Input Image"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <button
          className="btn waves-effect #64b5f6 blue waves-light darken-1"
          onClick={() => Postdata()}
        >
          Signup
        </button>
        <h5>
          <Link to="/signin">Already have an account ?</Link>
        </h5>
      </div>
    </div>
  );
}

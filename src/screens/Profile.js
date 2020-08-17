import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../App";
export default function Profile() {
  const [mypics, setpics] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  const [image, setImage] = useState("");
  const [url, setUrl] = useState(undefined);
  useEffect(() => {
    fetch("/mypost", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setpics(res.mypost);
      });
  }, []);
  const titleCase = (str) => {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  };
  useEffect(() => {
    if (image) {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "instagram-clone-app");
      data.append("cloud_name", "ateet");
      fetch("https://api.cloudinary.com/v1_1/ateet/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setUrl(data.url);
          console.log(data)
          localStorage.setItem("user", JSON.stringify({...state, pic: data.url}))
          dispatch({type:"UPDATEPIC", payload: data.url})
          window.location.reload()
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [image]);
  const updateProfilePic = (file) => {
    setImage(file);
  };
  return (
    <div style={{ maxWidth: "550px", margin: "0px auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0px",
          borderBottom: "1px solid grey",
        }}
      >
        <div>
          <img
            style={{ width: "160px", height: "160px", borderRadius: "80px" }}
            src={state ? state.pic : "no imgae"}
          />
        </div>

        <div>
          <h4>{titleCase(state ? state.name : "loading")}</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "108%",
            }}
          >
            <h6>{mypics.length} Post</h6>
            <h6>{state ? state.followers.length : "NA"} Followers</h6>
            <h6>{state ? state.following.length : "NA"} Following</h6>
          </div>
        </div>
        <div className="file-field input-field">
          <div className="btn #64b5f6 blue darken-1">
            <span>Upload Profile Image</span>
            <input
              type="file"
              placeholder="Input Image"
              onChange={(e) => {
                updateProfilePic(e.target.files[0]);
              }}
            />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
      </div>

      <div className="gallery">
        {mypics.map((item) => {
          return (
            <img
              className="item"
              src={item.photo}
              alt={item.title}
              key={item._id}
            />
          );
        })}
      </div>
    </div>
  );
}

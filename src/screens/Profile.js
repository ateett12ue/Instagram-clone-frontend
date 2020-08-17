import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../App";
export default function Profile() {
  const [mypics, setpics] = useState([]);
  const { state, dispatch } = useContext(UserContext);
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
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }
 console.log(state)
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
            src={state?state.pic:"no imgae"}
          />
        </div>
        <div>
          <h4>{titleCase(state?state.name:"loading")}</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "108%",
            }}
          >
            <h6>{mypics.length} Post</h6>
            <h6>{state? state.followers.length : "NA"} Followers</h6>
            <h6>{state? state.following.length: "NA"} Following</h6>
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

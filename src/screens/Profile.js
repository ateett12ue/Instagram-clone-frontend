import React from "react";

export default function Profile() {
  return (
    <div style={{maxWidth:"550px", margin:"0px auto"}}>
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
            src="https://images.unsplash.com/photo-1552158732-06dc1d835de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80"
          />
        </div>
        <div>
          <h4>Ateet Tiwari</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "108%",
            }}
          >
            <h6>40 Post</h6>
            <h6>40 Followers</h6>
            <h6>40 Following</h6>
          </div>
        </div>
      </div>
      <div className="gallery">
        <img
          className="item"
          src="https://images.unsplash.com/photo-1552158732-06dc1d835de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1552158732-06dc1d835de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1552158732-06dc1d835de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1552158732-06dc1d835de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1552158732-06dc1d835de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1552158732-06dc1d835de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80"
        />
      </div>
    </div>
  );
}

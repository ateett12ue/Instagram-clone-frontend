import React from "react";

export default function Home() {
  return (
    <div className="home">
      <div className="card home-card">
        
        <h5>ateet</h5>
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60" />
        </div>
        <div className="card-content">
        <i className="material-icons" style={{ color: "red" }}>
          favorite
        </i>
          <h6>title</h6>
          <p>caption</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>
      <div className="card home-card">
        <h5>ateet</h5>
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60" />
        </div>
        <div className="card-content">
          <i className="material-icons" style={{ color: "red" }}>
            favorite
          </i>
          <h6>title</h6>
          <p>caption</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>
      <div className="card home-card">
        <h5>ateet</h5>
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60" />
        </div>
        <div className="card-content">
          <i className="material-icons" style={{ color: "red" }}>
            favorite
          </i>
          <h6>title</h6>
          <p>caption</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>
    </div>
  );
}

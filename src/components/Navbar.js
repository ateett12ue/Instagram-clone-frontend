import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../App";
const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const renderList = () => {
    if (state) {
      return [
        <li key="Profile">
          <Link to="/profile">Profile</Link>
        </li>,
        <li key="CreatePost">
          <Link to="/create">Create Post</Link>
        </li>,
        <li key="HomePost">
          <Link to="/homepost">Home Post</Link>
        </li>,
        <li key="SignOut">
          <button
            className="btn waves-effect #c62828 red
waves-light darken-3"
            onClick={() => {
              localStorage.clear();
              dispatch({ type: "CLEAR" });
              history.push("/signin");
            }}
          >
            SignOut
          </button>
        </li>,
      ];
    } else {
      return [
        <li key="SignIn">
          <Link to="/signin">Signin</Link>
        </li>,
        <li key="SignUp">
          <Link to="/signup">SignUp</Link>
        </li>,
      ];
    }
  };
  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to={state ? "/" : "/signin"} className="brand-logo left">
          Instagram
        </Link>
        <ul id="nav-mobile" className="right">
          {renderList()}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

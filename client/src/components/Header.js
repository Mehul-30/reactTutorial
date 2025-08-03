import {URL_LOGO} from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [authButton, setAuthButton] = useState("Login");
  return (
    <div className="Header">
      <div className="logo-container">
        <img className="logo" src = {URL_LOGO} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li className="button" onClick={()=>{
            if(authButton === "Login"){
              setAuthButton("Logout");
            }else{
              setAuthButton("Login");
            }
          }}>{authButton}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
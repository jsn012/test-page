import React from "react";
import { useNavigate } from "react-router-dom";

import '../Header.css'

function Header() {
  const navigate = useNavigate();
  const titleClick = () => {
    navigate('/test-page')
  };

  return(
    <header>
      <div className="title" onClick={titleClick}>
        타이틀
      </div>
    </header>
  );
}

export default Header;
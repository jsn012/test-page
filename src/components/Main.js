import React from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const btnClick = () => {
    navigate('/game/main')
  };

  return(
    <main>
      <div className="main">
        Main
        <button type="button" onClick={btnClick}>Game</button>
      </div>
    </main>
  );
}

export default Main;
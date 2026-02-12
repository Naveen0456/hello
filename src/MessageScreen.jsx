import React from "react";
import { useNavigate } from "react-router-dom";
import "./MessageScreen.css";

function MessageScreen() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/valentine");
  };

  return (
    <div className="message-container">
      <div className="message-card">
        <h3>Hi Anu ❤️</h3>

        <p className="hey">
          Can you click this{" "}
          <span className="message-link" onClick={handleClick}>
            link
          </span>{" "}
          pretty please ?
        </p>

        <p className="note-text">Note: This is not a scam 😅</p>

        <p className="signature">
          Yours,<br />
          YuvaRaj
        </p>
      </div>
    </div>
  );
}

export default MessageScreen;

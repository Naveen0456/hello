import React, { useState } from "react";
import "./ValentineScreen.css";

function ValentineScreen() {
  const [showMessage, setShowMessage] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: 0, left: 0 });

  const handleYes = () => {
    setShowMessage(true);
  };

  const moveNoButton = () => {
    const randomTop = Math.floor(Math.random() * 200) - 100;
    const randomLeft = Math.floor(Math.random() * 200) - 100;

    setNoPosition({
      top: randomTop,
      left: randomLeft,
    });
  };

  // ✅ If YES clicked → Show full separate page layout
  if (showMessage) {
    return (
      <div className="love-page">
        <div className="love-content">
          <h1>She Said YES 💖</h1>

          <p>
            Congratulations YuvaRaj <br /><br />
            This moment just became a beautiful memory ✨ <br />
            You are my today, my tomorrow, and my forever. <br /><br />
            Thank you for being my wife, my love, my best friend. <br />
            I love you endlessly ❤️
          </p>

          <button
            className="back-btn"
            onClick={() => setShowMessage(false)}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Default Valentine Screen
  return (
    <div className="valentine-container">
      <div className="valentine-card">
        <h1 className="valentine-text">
          Will you be my Valentine?
        </h1>

        <div className="button-group">
          <button className="yes-btn" onClick={handleYes}>
            YES 💖
          </button>

          <button
            className="no-btn"
            onMouseEnter={moveNoButton}
            style={{
              position: "relative",
              top: noPosition.top,
              left: noPosition.left,
            }}
          >
            No
          </button>
        </div>

        <p className="shy-text">(No is little shy 😳)</p>
      </div>
    </div>
  );
}

export default ValentineScreen;

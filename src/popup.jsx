import React from "react";
import "./popup.css";

function Popup({ setpop, confirmDelete }) {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h3>Are you sure?</h3>
        <p>This data will be deleted permanently.</p>

        <div className="popup-btns">
          <button onClick={() => setpop(false)}>Cancel</button>
          <button onClick={confirmDelete}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
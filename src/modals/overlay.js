import React from 'react';
import './../overlay.css'; // Import your overlay styles
import { IoMdClose } from "react-icons/io";

const Overlay = ({ isOpen, onClose, children }) => {
  // Render nothing if the overlay is not open
  if (!isOpen) {
    return null;
  }

  return (
    <div className="overlay overlay-show"> {/* Add overlay-show class if isOpen is true */}
      <div className="overlay-content">
        <button className="close-button" onClick={onClose}>
          <IoMdClose color="white" size={30} />
        </button>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "black", borderRadius: 20, border: "1px solid white", width: "80%" }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;

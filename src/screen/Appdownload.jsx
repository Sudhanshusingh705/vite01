import React from "react";
import "../screen/Home.css";

const Appdownload = () => {
  return (
    <div className="d-flex justify-content-end"> {/* Add this container for centering */}
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src="src\assets\appdownload.jpg"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Search My College App Download</h5>
        </div>
      </div>
    </div>
  );
};

export default Appdownload;

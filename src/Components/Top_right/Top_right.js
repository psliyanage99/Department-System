import React from "react";
import "./Top_right.css";
import { FaSearch } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { FiSliders } from "react-icons/fi";

function Top_right() {
  return (
    <nav className="top">
      <div className="row  justify-content-end">
        <div className="col-md-auto">
            <div className="input-group">
                <input className="form-control border input-group-append" type="search" placeholder="Search" id="example-search-input"/>
                    <button className="btn btn-outline-secondary bg-white   border-0 ms-n5 bg-transparent" type="button">
                        <i className=""><FaSearch/></i>
                    </button>
            </div>
        </div>

        <div className="col-md-auto">
          <button type="button" className="border-0" style={{ borderRadius: "100%", backgroundColor: "#19356F", borderColor: "#19356F", width: "34px", height: "34px", color: "white",}}>
            <i className="ico">
              <FiBell style={{ color: "#6593F5" }} />
            </i>
          </button>
          <span className="justify-content-center align-items-center position-absolute top-6 start-75 translate-middle badge rounded-pill badge-notification" style={{ borderRadius: "100%", backgroundColor: "#FC0000", border: "1px solid white", width: "14px", height: "14px", color: "white",}}>
            <p className="noti-val" style={{fontSize:"10px"}}>2</p>
          </span>
        </div>

        <div className="col-md-auto">
          <span
            className="border-0 position-relative"
            style={{ width: "36px", height: "36px" }}
          >
            <i className="ico">
              <FiSliders className="fw-bold" style={{ color: "#19356F", cursor:"pointer" }} />
            </i>
          </span>
        </div>
    </div>
  </nav>
  );
}

export default Top_right;

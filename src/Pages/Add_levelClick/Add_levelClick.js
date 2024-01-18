import React from "react";
import "./Add_levelClick.css";
// import { MDBBtn } from 'mdb-react-ui-kit';  
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

function Add_levelClick() {
    return(
        <section className="rbody vh-100">
      <div className="container py-2 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="col-12 col-md-8 col-lg-6 col-xl-4">
            <div className="card bg-white text-white" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5  text-left">
                <div className="mb-md-1 mt-md-1">
                  <h2 className="fw-bold fs-4 mb-4" style={{ color: "#434343" }}>
                  Add Level
                  </h2>
                  <form>
                    <label htmlFor="Hierarchy" className="col-sm-8 text-dark">Select Parent</label> 
                    <div className="input-group  form-dark mb-4 ">
                      <input type="text" id="typeEmailX" className="form-control form-control-md" placeholder="Department" />
                    </div>

                    <label htmlFor="Hierarchy" className="col-sm-8 text-dark">Level</label>
                    <div className="input-group form-dark mb-4">
                      <input type="text" id="typePasswordX" className="form-control form-control-md" placeholder="Sub Department"/>                    
                    </div>

                 
                    <div className="input-group  form-dark mb-3 justify-content-end">
                      <button className="btn  " type="submit" style={{ backgroundColor: "#6593F5", color: "#ffffff"}}>
                      Add
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}






export default Add_levelClick;
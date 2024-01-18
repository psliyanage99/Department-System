import React from "react";
import "./Add_department.css";
// import { MDBBtn } from 'mdb-react-ui-kit';  
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

function Add_department() {
    return(
    <section className="dbody vh-100">
      <div className="container py-1 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="col-12 col-md-6 col-lg-4 col-xl-6">
            <div className="card bg-white text-white p-4 mt-3 mb-4" style={{ borderRadius: "1rem" }}>
              <div className="card-body  text-left ">
                <div className="mb-0 mt-0">
                  <h2 className="fw-bold fs-4 mb-2" style={{ color: "#434343" }}>
                    Create Department 
                  </h2>
                  <form>
                    <label htmlFor="Hierarchy" className="col-sm-2 text-dark mt-3">Name</label>
                    <div className="input-group  form-dark mb-3 grid gap-2"> 
                      <input type="text" id="typeEmailX" className="form-control form-control-md" placeholder="" />               
                    </div>

                    <label htmlFor="Hierarchy" className="col-sm-2 text-dark">Phone</label>
                    <div className="input-group form-dark mb-3 grid gap-2">
                      <input type="text" id="typePasswordX" className="form-control form-control-md" placeholder=""/>                    
                    </div>

                    <label htmlFor="Hierarchy" className="col-sm-2 text-dark">Email</label>
                    <div className="input-group form-dark mb-3 grid gap-2">
                      <input type="text" id="typePasswordX" className="form-control form-control-md" placeholder=""/>             
                    </div>

                    <label htmlFor="Hierarchy" className="col-sm-2 text-dark">Address</label>
                    <div className="input-group form-dark mb-3 grid gap-2">
                      <input type="text" id="typePasswordX" className="form-control form-control-md" placeholder=""/>             
                    </div>

                    <label htmlFor="Hierarchy" className="col-sm-2 text-dark">Head</label>
                    <div className="input-group form-dark  grid gap-2">
                      <input type="text" id="typePasswordX" className="form-control form-control-md" placeholder=""/>             
                    </div>

                    <div className="input-group  form-dark mb-1 mt-4 justify-content-end">
                      <button className="btn  " type="submit" style={{ backgroundColor: "#6593F5", color: "#ffffff", paddingRight:"40px", paddingLeft:"40px"}}>
                        ADD
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
export default Add_department;
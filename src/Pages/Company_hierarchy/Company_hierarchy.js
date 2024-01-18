import React from "react";
import "./Company_hierarchy.css";
// import { MDBBtn } from 'mdb-react-ui-kit';  
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

function Company_hierarchy() {
    return(
        <section className="rbody vh-100">
      <div className="container py-2 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="col-12 col-md-8 col-lg-6 col-xl-8">
            <div className="card bg-white text-white" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5  text-left">
                <div className="mb-md-1 mt-md-1">
                  <h2 className="fw-bold fs-4 mb-4" style={{ color: "#434343" }}>
                    Company Hierarchy
                  </h2>
                  <form>
                    <label htmlFor="Hierarchy" className="col-sm-6 text-dark mb-2">Hierarchy Level</label><br/>
                    <div className="input-group form-dark mb-3 w-25">
                        <select className="form-select form-control-md" aria-label="Default select example">
                            {/* <option selected>Open this select menu</option> */}
                            <option value="1">Group</option>
                            <option value="2">Company</option>
                            <option value="3">Section</option>
                            <option value="3">Department</option>
                        </select>
                    </div>

                    <div className="input-group  form-dark mb-3 justify-content-between">
                      <label htmlFor="Hierarchy" className="col-sm-2 text-dark">Hierarchy</label> 
                      <button className="btn " data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" type="add" style={{ backgroundColor: "#19356F", color: "#ffffff"}}><span className="capitalize-first-letter justify-content-center">Add Level<AddOutlinedIcon className="ico fs-6  ms-2" style={{ color: "#6593F5"}}/></span></button>
                    </div>

                    <div className="input-group  form-dark mb-3 ">
                      <label htmlFor="Hierarchy" className="col-sm-2 text-dark">Sections</label> 
                      <input type="text" id="typeEmailX" className="form-control form-control-md" placeholder="" />
                      <span className="add"></span>
                    </div>

                    <div className="input-group form-dark mb-3">
                      <label htmlFor="Hierarchy" className="col-sm-2 text-dark">Departments</label>
                      <input type="text" id="typePasswordX" className="form-control form-control-md" placeholder=""/>                    
                    </div>

                    <div className="input-group form-dark mb-3">
                      <label htmlFor="Hierarchy" className="col-sm-2 text-dark">Phone</label>
                      <input type="text" id="typePasswordX" className="form-control form-control-md" placeholder="+94112552525"/>                    
                    </div>

                    <div className="input-group form-dark mb-3">
                      <label htmlFor="Hierarchy" className="col-sm-2 text-dark">Email</label>
                      <input type="text" id="typePasswordX" className="form-control form-control-md" placeholder="abccom.123@gmail.com"/>                    
                    </div>

                    <div className="input-group form-dark mb-3">
                      <label htmlFor="Hierarchy" className="col-sm-2 text-dark">Address</label>
                      <input type="text"  className="form-control form-control-md" placeholder="ABC Company , Colombo 3"/>                   
                    </div>

                    {/* <div className="input-group form-dark mb-3">
                      <input type="" id="typePasswordY" className="form-control form-control-md" placeholder="Confirm Password" />                  
                    </div> */}
                    <div className="input-group  form-dark mb-3 justify-content-end">
                      <button className="btn  " type="submit" style={{ backgroundColor: "#6593F5", color: "#ffffff"}}>
                        Submit
                      </button>
                    </div>
                  </form>

                  {/* <div className="align-item-center mb-0">
                    <p className="small text-dark">
                        <a className="text-dark-50 fs-6" href="#!">
                        Forgot password?
                        </a>
                    </p>
                  </div> */}

                  {/* <div className="d-flex justify-content-center align-item-center  mt-3">
                    <p className="small text-dark fs-6">Already Have an Account ?</p>
                    <p className="small fs-6">
                      <a className="text-dark-50" href="#!">
                        Login
                      </a>
                    </p>
                  </div> */}
                  

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    );
}






export default Company_hierarchy;
import React from "react";
import "./Edit_goal.css";
// import { MDBBtn } from 'mdb-react-ui-kit';  
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

function Company_hierarchy() {
    return(
    <section className="ebody vh-100">
      <div className="container py-2 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="col-12 col-md-8 col-lg-6 col-xl-8">
            <div className="card bg-white text-white" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5  text-left">
                <div className="mb-md-1 mt-md-1">
                  <h2 className="fw-bold fs-4 mb-4" style={{ color: "#434343" }}>
                    Edit Goal
                  </h2>

                <form>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <label htmlFor="Hierarchy" className="text-dark mb-1 mt-3">Goal Name</label>
                                <div className="input-group form-dark mb-3 justify-content-between">
                                    <input type="text" id="typeEmailX" className="form-control form-control-md" placeholder="Goal Name" />
                                </div>

                                <label htmlFor="Hierarchy" className="text-dark mb-1 mt-3">Period</label>
                                <div className="input-group form-dark mb-3">
                                    <select className="form-select form-control-md" aria-label="Default select example">
                                    <option selected>- Period -</option>
                                    <option value="1">Yearly</option>
                                    <option value="2">Monthly</option>
                                    <option value="3">Weekly</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label htmlFor="Hierarchy" className="text-dark mb-1 mt-3">Target</label>
                                <div className="input-group form-dark mb-3">
                                    <input type="text" id="typeEmailX" className="form-control form-control-md" placeholder="Target" />
                                    <span className="add"></span>
                                </div>

                                <label htmlFor="Hierarchy" className="text-dark mb-1 mt-3">Apply For</label>
                                <div className="input-group form-dark mb-3">
                                    <select className="form-select form-control-md" aria-label="Default select example">
                                    <option selected>- Apply for -</option>
                                    <option value="1">1 Year</option>
                                    <option value="2">2 Years</option>
                                    <option value="3">3 Years</option>
                                    <option value="4">4 Years</option>
                                    </select>
                                </div>
                            </div>

                                <label htmlFor="Hierarchy" className="col-sm-2 text-dark mb-1 mt-3">Description</label>
                                <div className="input-group form-dark mb-3">
                                    <input type="text" id="typePasswordX" className="form-control form-control-md" placeholder="Description"/>                    
                                </div>

                                <div className="input-group  form-dark mb-3 mt-3 justify-content-end">
                                    <button className="btn  " type="submit" style={{ backgroundColor: "#6593F5", color: "#ffffff", paddingRight:"25px", paddingLeft:"25px"}}>
                                        Save Changes
                                    </button>
                                </div>
                            </div>
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






export default Company_hierarchy;
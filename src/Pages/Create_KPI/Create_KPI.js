import React from "react";
import "./Create_KPI.css";
// import { MDBBtn } from 'mdb-react-ui-kit';  
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

function Create_KPI() {
    return(
        <section className="kpibody vh-100">
      <div className="container py-2 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="col-12 col-md-8 col-lg-6 col-xl-8">
            <div className="card bg-white text-white" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5  text-left">
                <div className="mb-md-1 mt-md-1">
                  <h2 className="fw-bold fs-4 mb-5" style={{ color: "#434343" }}>
                    Create KPI
                  </h2>
                  <form>          
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                            {/* <label htmlFor="Hierarchy" className="text-dark mb-1 mt-3">Goal Name</label> */}
                            <div className="input-group form-dark mb-3 justify-content-between">
                                <input type="text" id="typeEmailX" className="form-control form-control-md" placeholder="KPI" />
                            </div>

                            {/* <label htmlFor="Hierarchy" className="text-dark mb-1 mt-3">Goal Name</label> */}
                            <div className="input-group form-dark mb-3 justify-content-between">
                                <input type="text" id="typeEmailX" className="form-control form-control-md" placeholder="Target Performance" />
                            </div>

                            <div className="input-group form-dark mb-3">
                                <input type="text" id="typePasswordX" className="form-control form-control-md" placeholder="Measure Unit"/>                    
                            </div>

                            {/*  */}
                            </div>

                            <div className="col-sm-6">
                                {/* <label htmlFor="Hierarchy" className="text-dark mb-1 mt-3"></label> */}
                                <div className="input-group form-dark mb-3">
                                    <select className="form-select form-control" aria-label="Default select example">
                                    <option selected>- KPI Type -</option>
                                    <option value="1">1 Year</option>
                                    <option value="2">2 Years</option>
                                    <option value="3">3 Years</option>
                                    <option value="4">4 Years</option>
                                    </select>
                                </div>

                                {/* <label htmlFor="Hierarchy" className="text-dark mb-1 mt-3">Goal Name</label> */}
                                <div className="input-group form-dark mb-3 justify-content-between">
                                    <input type="text" id="typeEmailX" className="form-control form-control-md" placeholder="Actual Performance" />
                                </div>
                            </div>

                            {/* <label htmlFor="Hierarchy" className="col-sm-2 text-dark mb-1 mt-3">Description</label> */}
                            {/* <div className="input-group form-dark mb-3">
                            <input type="text" id="typePasswordX" className="form-control form-control-md" placeholder="Description"/>                    
                            </div> */}

                            <div className="input-group  form-dark mb-3 mt-3 justify-content-end">
                          <button className="btn  fs-6 pt-2 pb-2" type="submit" style={{ backgroundColor: "#6593F5", color: "#ffffff", paddingRight:"30px", paddingLeft:"30px"}}>
                            SUBMIT
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






export default Create_KPI;
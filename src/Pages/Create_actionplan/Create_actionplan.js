import React from "react";
import "./Create_actionplan.css";

function Create_actionplan() {
    return(
        <section className="createstrategyy-body vh-100">
      <div className="container py-2 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="col-12 col-md-8 col-lg-6 col-xl-8">
            <div className="card bg-white text-white" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5  text-left">
                <div className="mb-md-1 mt-md-1">
                  <h2 className="fw-bold fs-4 mb-4" style={{ color: "#434343" }}>
                    Create Action Plan
                  </h2> 
                  <form>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                            {/* <label htmlFor="Hierarchy" className="text-dark mb-1 mt-3">Goal Name</label> */}
                            <div className="input-group form-dark mb-3 justify-content-between">
                                <input type="text" id="typeEmailX" className="form-control form-control-md" placeholder="Acton Plan" />
                            </div>

                            
                            </div>

                            <div className="col-sm-6">
                            {/* <label htmlFor="Hierarchy" className="text-dark mb-1 mt-3">Target</label> */}
                            <div className="input-group form-dark mb-3">
                                <input type="text" id="typeEmailX" className="form-control form-control-md" placeholder="Action Plan Description" />
                                <span className="add"></span>
                            </div>
                            </div>

                            <div className="input-group  form-dark mb-3 mt-3 justify-content-end">
                        <button className="btn  fs-6 pt-2 pb-2" type="submit" style={{ backgroundColor: "#6593F5", color: "#ffffff", paddingRight:"30px", paddingLeft:"30px"}}>
                            submit
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


export default Create_actionplan;
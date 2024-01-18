import React from "react";

function Add_typeClick() {
    return(
        <section className="rbody vh-100">
      <div className="container py-2 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="col-12 col-md-8 col-lg-6 col-xl-4">
            <div className="card bg-white text-white" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5  text-left">
                <div className="mb-md-1 mt-md-1">
                  <h2 className="fw-bold fs-4 mb-4" style={{ color: "#434343" }}>
                  Add Type
                  </h2>
                  <form>
                  <label htmlFor="Hierarchy" className="col-sm-6 text-dark mb-1">Select Type</label><br/>
                    <div className="input-group form-dark mb-4 w-70">
                        <select className="form-select form-control-md" aria-label="Default select example">
                            {/* <option selected>Open this select menu</option> */}
                            <option value="1">KPI</option>
                            <option value="2">Company</option>
                            <option value="3">Section</option>
                            <option value="3">Department</option>
                        </select>
                    </div>
                 
                    <div className="input-group  form-dark mb-2 justify-content-end">
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






export default Add_typeClick;
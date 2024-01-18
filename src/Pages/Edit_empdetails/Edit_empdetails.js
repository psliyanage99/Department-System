import React from "react";
import "./Edit_empdetails.css";
import profile from "../../Images/profile.png"

function Edit_empdetails() {
    return(
    <section className="editemployee-body  align-items-center d-flex justify-content-center vh-100">
      <div className="container py-1 justify-content-center align-items-center mt-2 ">
        <div className="row d-flex align-item-center justify-content-center h-100">
          <div className="col-md-4 d-block h-100">
            
            <div className="card bg-white text-white justify-content-center" style={{ borderRadius: "1rem" }}>
            <h6 className="fw-bold fs-4" style={{ color: "#434343", paddingLeft:"25px", paddingTop:"25px"}}>
                    Employee Details
                  </h6>
              <div className="card-contain card-body align-items-center">
                {/* <div className="mb-md-1 mt-md-1 ml-4"> */}
                  
                  
                  <div className="form-body ">                  
                    <div className="profile-picture text-center">
                      <img src={profile} alt="" className="profile-image rounded-circle"/>
                    </div>

                    {/* <div className="input-body col-sm-6"> */}
                      <label htmlFor="Hierarchy" className="text-dark mb-1">Name</label>                  
                      <input type="text" id="typeEmailX" className="form-control" placeholder="Mickey Steaven" />
                    {/* </div> */}

                    {/* <div className="input-body col-md-6"> */}
                      <label htmlFor="Hierarchy" className="text-dark mb-1 mt-1">Job Role</label>                  
                      <input type="text" id="typeEmailX" className="form-control" placeholder="Department Head" />
                    {/* </div> */}

                    {/* <div className="input-body col-md-6"> */}
                      <label htmlFor="Hierarchy" className="text-dark mb-1 mt-1">Department</label>                  
                      <input type="text" id="typeEmailX" className="form-control" placeholder="HR Department" />
                    {/* </div> */}

                    {/* <div className="input-body col-md-6"> */}
                      <label htmlFor="Hierarchy" className="text-dark mb-1 mt-1">Sub Department</label>                  
                      <input type="text" id="typeEmailX" className="form-control" placeholder="Health and Safety Department" />
                    {/* </div> */}

                    {/* <div className="input-body col-md-6"> */}
                      <label htmlFor="Hierarchy" className="text-dark mb-1 mt-1">Address</label>                  
                      <input type="text" id="typeEmailX" className="form-control" placeholder="No. 101 , Stream Street , Colombo" />
                    {/* </div> */}

                    <div className="input-body">
                      <button className="submit-button btn fs-6 text-dark pt-1 pb-1 mt-4 mb-4" type="submit">
                      submit
                      </button>
                    </div>

                          {/* <div className="input-group  form-dark mb-3 mt-3 justify-content-end">
                            <button className="btn  fs-6 pt-2 pb-2" type="submit" style={{ backgroundColor: "#6593F5", color: "#ffffff", paddingRight:"30px", paddingLeft:"30px"}}>
                                submit
                            </button>
                          </div> */}
                  </div>                                       
                  {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}


export default Edit_empdetails;
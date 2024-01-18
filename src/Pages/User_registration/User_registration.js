import React, { useState } from "react";
import "./User_registration.css";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";


function User_registration() {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [passwordVisible1, setPasswordVisible1] = useState(false);
    const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };


  return (
    <section className="rbody vh-100">
      <div className="container py-2 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-white text-white" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-4 text-center">
                <div className="mb-md-1 mt-md-1">
                  <h2 className="fw-bold mb-4" style={{ color: "#434343" }}>
                    Register
                  </h2>
                  <form>
                    <div className="input-group  form-dark mb-3">
                      <input type="text" id="typeEmailX" className="form-control form-control-md" placeholder="Full Name" style={{backgroundColor: "#F3F3F3"}}/>
                    </div>

                    <div className="input-group form-dark mb-3">
                      <input type="text" id="typePasswordX" className="form-control form-control-md" placeholder="Department" style={{backgroundColor: "#F3F3F3"}}/>                    
                    </div>

                    <div className="input-group form-dark mb-3">
                      <input type="text" id="typePasswordX" className="form-control form-control-md" placeholder="Sub Department" style={{backgroundColor: "#F3F3F3"}}/>                    
                    </div>

                    <div className="input-group form-dark mb-3">
                      <input type="text" id="typePasswordX" className="form-control form-control-md" placeholder="Job Role" style={{backgroundColor: "#F3F3F3"}}/>                    
                    </div>

                    <div className="input-group form-dark mb-3">
                      <input type={passwordVisible ? "text" : "password"} id="typePasswordX" className="form-control form-control-md pwd" placeholder="Password" style={{backgroundColor: "#F3F3F3"}}/> 
                      <span className="input-group-text">
                        {passwordVisible ? (
                          <MdOutlineVisibilityOff
                            onClick={togglePasswordVisibility}
                            style={{ cursor: "pointer" }}
                          />
                        ) : (
                          <MdOutlineVisibility
                            onClick={togglePasswordVisibility}
                            style={{ cursor: "pointer" }}
                          />
                        )}
                      </span>                   
                    </div>

                    <div className="input-group form-dark mb-3">
                      <input type={passwordVisible1 ? "text" : "password"} id="typePasswordY" className="form-control form-control-md" placeholder="Confirm Password" style={{backgroundColor: "#F3F3F3"}}/>
                      <span className="input-group-text">
                        {passwordVisible1 ? (
                          <MdOutlineVisibilityOff
                            onClick={togglePasswordVisibility1}
                            style={{ cursor: "pointer" }}
                          />
                        ) : (
                          <MdOutlineVisibility
                            onClick={togglePasswordVisibility1}
                            style={{ cursor: "pointer" }}
                          />
                        )}
                      </span>                  
                    </div>
                    <button className="btn btn-outline-primary btn-md px-5 mb-4 pb-lg-2 mt-4" type="submit">
                      Register
                    </button>
                  </form>

                  <div className="align-item-center mb-0">
                    <p className="small text-dark">
                        <a className="text-dark-50 fs-6" href="#!">
                        Forgot password?
                        </a>
                    </p>
                  </div>

                  <div className="d-flex justify-content-center align-item-center  mt-3">
                    <p className="small text-dark fs-6">Already Have an Account ?</p>
                    <p className="small fs-6">
                      <a className="text-dark-50" href="#!">
                        Login
                      </a>
                    </p>
                  </div>
                  

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default User_registration;

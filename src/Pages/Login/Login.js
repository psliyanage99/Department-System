import React from "react";
import "./Login.css";
import { FiUser } from "react-icons/fi";
import { LuKey } from "react-icons/lu";


function Login() {
  return (
    <section className="body vh-100">
      <div className="container py-4 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-white text-white" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-1 mt-md-1">
                  <h2 className="fw-bold mb-5" style={{ color: "#434343" }}>
                    Login
                  </h2>
                  <form>
                    <div className="input-group  form-dark mb-3">
                        <span className="input-group-text" style={{backgroundColor: "#F3F3F3"}}>
                            <i className="user-icon"><FiUser/></i>
                        </span>
                      <input type="email" id="typeEmailX" className="form-control form-control-md" placeholder="Enter User ID" style={{backgroundColor: "#F3F3F3"}}/>
                    </div>

                    <div className="input-group form-dark mb-3">
                        <span className="input-group-text" style={{backgroundColor: "#F3F3F3"}}>
                            <i className="user-icon"><LuKey/></i>
                        </span>
                      <input type="password" id="typePasswordX" className="form-control form-control-md" placeholder="Enter Password" style={{backgroundColor: "#F3F3F3"}}/>                    
                    </div>
                    <button className="btn btn-outline-primary btn-md px-5 mb-4 pb-lg-2 mt-4" type="submit">
                      Login
                    </button>
                  </form>

                  <div className="align-item-center mb-0">
                    <p className="small text-dark">
                        <a className="text-dark-50 fs-6" href="#!">
                        Forgot password?
                        </a>
                    </p>
                  </div>

                  <div className="d-flex justify-content-center align-item-center mb-0 mt-5">
                    <p className="small text-dark fs-6">Don’t have an account ?</p>
                    <p className="small fs-6">
                      <a className="text-dark-50" href="#!">
                        Sign Up
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

export default Login;

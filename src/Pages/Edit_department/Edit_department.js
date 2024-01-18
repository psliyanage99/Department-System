import React from "react";
import "./Edit_department.css";
import Topright from "../../Components/Top_right/Top_right";

function Edit_department() {
    return(
        <div className="editDepartment_body 100vh">
            <div className="container 100vh">
                <div className="Topright pt-5 ">
                    <Topright className="mb-4"/>
                    <h2 className="fw-bold fs-4 mb-1 mt-5" style={{ color: "#434343" }}>
                    Department summary - Department 1
                    </h2>
                </div>

                <div className="row d-flex justify-content-center align-items-center h-100 mt-4">
                    <div className="col-12 col-md-8 col-lg-4 col-xl-12">
                        <div className="card bg-white text-white" style={{ borderRadius: "0.5rem" }}>
                        <div className="card-body p-5  text-left">
                            <div className="mb-md-1 mt-md-1">
                            <h2 className="fw-bold fs-4 mb-3" style={{ color: "#434343" }}>
                            Department 1
                            </h2>
                            <form>          
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-6">
                                        <label htmlFor="Hierarchy" className="text-dark mb-1 mt-2">Name</label>
                                        <div className="input-group form-dark mb-3 justify-content-between">
                                            <input type="text" id="typeEmailX" className="form-control form-control-md" placeholder="Department 1" />
                                        </div>

                                        <label htmlFor="Hierarchy" className="text-dark mb-1 mt-2">Phone</label>
                                        <div className="input-group form-dark mb-3 justify-content-between">
                                            <input type="text" id="typeEmailX" className="form-control form-control-md" placeholder="+94112552525" />
                                        </div>

                                        <label htmlFor="Hierarchy" className="text-dark mb-1 mt-2">Email</label>
                                        <div className="input-group form-dark mb-3 justify-content-between">
                                            <input type="text" id="typeEmailX" className="form-control form-control-md" placeholder="abccom.comp1.a@gmail.com" />
                                        </div>
                                        </div>

                                        <div className="col-sm-6">
                                        <label htmlFor="Hierarchy" className="text-dark mb-1 mt-2">Address</label>
                                        <div className="input-group form-dark mb-3">
                                            <input type="text" id="typeEmailX" className="form-control form-control-md" placeholder="Abc compnay 1, colombo 3" />
                                            <span className="add"></span>
                                        </div>

                                        <label htmlFor="Hierarchy" className="text-dark mb-1 mt-2">Head</label>
                                        <div className="input-group form-dark mb-3">
                                            <input type="text" id="typeEmailX" className="form-control form-control-md" placeholder="Mr. Mickey" />
                                            <span className="add"></span>
                                        </div>
                                        </div>

                                        <div className="input-group  form-dark mb-3 mt-3 justify-content-end">
                                    <button className="btn  " type="submit" style={{ backgroundColor: "#6593F5", color: "#ffffff", paddingRight:"40px", paddingLeft:"40px", paddingTop:"15px", paddingBottom:"15px"}}>
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
        </div>
    )
}

export default Edit_department;
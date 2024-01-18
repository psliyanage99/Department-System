import React from "react";
import "./Organization_levels.css";
// import { MDBBtn } from 'mdb-react-ui-kit';  
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

function Organization_levels() {
    return(
        <section className="organization-body 100vh">
      <div className="container py-2 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-6 col-lg-4 col-xl-6">
            <div className="card bg-white text-white p-3 mt-4 mb-4" style={{ borderRadius: "1rem" }}>
              <div className="card-body  text-left ">
                <div className="">
                  <h2 className="fw-bold fs-4" style={{ color: "#434343" }}>
                    Organization Levels 
                  </h2>
                  <form>
                    
                    <div className="input-group  form-dark mb-5 mt-5 grid gap-2 w-75"> 
                      <input type="text" id="typeEmailX" className="form-control form-control-md" placeholder="Organization / Group Name" />               
                    </div>

                    <div className="input-group form-dark mb-3 grid gap-2">
                      <input type="text" id="typePasswordX" className="form-control form-control-md" placeholder="L1 - Company/ Group"/>                    
                    </div>

                    <div className="input-group form-dark mb-3 grid gap-2">
                      <input type="text" id="typePasswordX" className="form-control form-control-md" placeholder="L2 - Department / Section"/>             
                    </div>

                    <div className="input-group form-dark mb-3 grid gap-2">
                      <input type="text" id="typePasswordX" className="form-control form-control-md" placeholder="L3 - Sub Department / Company"/>             
                    </div>

                    <div className="input-group form-dark mb-3 grid gap-2">
                      <input type="text" id="typePasswordX" className="form-control form-control-md" placeholder="L4 - Department"/>             
                    </div>

                    <div className="input-group form-dark  grid gap-2">
                      <input type="text" id="typePasswordX" className="form-control form-control-md" placeholder="L5 - Sub Department"/>             
                    </div>

                    <div className="input-group  form-dark mb-1 mt-5 justify-content-end">
                      <button className="btn  pt-2 pb-2 fs-6" type="submit" style={{ backgroundColor: "#6593F5", color: "#ffffff", paddingRight:"30px", paddingLeft:"30px"}}>
                        submit
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






export default Organization_levels;
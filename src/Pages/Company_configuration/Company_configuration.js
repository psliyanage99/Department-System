import { HiArrowSmRight } from "react-icons/hi";


function Company_configuratin() {
    return(
        <div className="container">
            <div className="main-title mt-5">
                <h4>Company Configuration</h4>
            </div>
            <div className="content mt-5">
                <div className="d-flex">
                    <div className="left-icon mr-4">
                        <span className="fs-2 fw-bold text-primary" style={{marginRight:"20px"}}><HiArrowSmRight /></span>
                    </div>
                    <div className="right-content">
                        <p className="fw-bold">Create Organization</p>
                        <p className="p-0">Description</p>
                    </div>
                </div>

                <div className="d-flex">
                    <div className="left-icon mr-4">
                        <span className="fs-2 fw-bold text-primary" style={{marginRight:"20px"}}><HiArrowSmRight /></span>
                    </div>
                    <div className="right-content">
                        <p className="fw-bold p-0">Create Sector</p>
                        <p className="p-0">Description</p>
                    </div>
                </div>

                <div className="d-flex">
                    <div className="left-icon mr-4">
                        <span className="fs-2 fw-bold text-primary" style={{marginRight:"20px"}}><HiArrowSmRight /></span>
                    </div>
                    <div className="right-content">
                        <p className="fw-bold p-0">Organization Levels</p>
                        <p className="p-0">Description</p>
                    </div>
                </div>

                <div className="d-flex">
                    <div className="left-icon mr-4">
                        <span className="fs-2 fw-bold text-primary" style={{marginRight:"20px"}}><HiArrowSmRight /></span>
                    </div>
                    <div className="right-content">
                        <p className="fw-bold p-0">Create Company</p>
                        <p className="p-0">Description</p>
                    </div>
                </div>

                <div className="d-flex">
                    <div className="left-icon mr-4">
                        <span className="fs-2 fw-bold text-primary" style={{marginRight:"20px"}}><HiArrowSmRight /></span>
                    </div>
                    <div className="right-content">
                        <p className="fw-bold p-0">Create Department</p>
                        <p className="p-0">Description</p>
                    </div>
                </div>

                <div className="d-flex">
                    <div className="left-icon mr-4">
                        <span className="fs-2 fw-bold text-primary" style={{marginRight:"20px"}}><HiArrowSmRight /></span>
                    </div>
                    <div className="right-content">
                        <p className="fw-bold p-0">Create Sub Department</p>
                        <p className="p-0">Description</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company_configuratin;
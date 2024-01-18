import React from "react";
import "./Subdepartment_summary.css";
import Topright from "../../Components/Top_right/Top_right";

function Subdepartment_summary() {
    return(
        <div className="summary_body">
            <div className="container">
                <div className="Topright pt-4">
                    <Topright/>
                    <h2 className="fw-bold fs-4 mb-6 mt-3" style={{ color: "#434343" }}>
                        SUB DEPARTMENT SUMMARY
                    </h2> 
                </div>

                <div className="summary">
                <table className="table align-middle  mb-0 table-striped table-hover">
                    <tbody>
                        <tr className="table-row">
                        <td>
                            <div className="d-flex align-items-center">
                            <div className="ms-3">
                                <p className="fw-bold mb-1">Sub Department 1</p>
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </div>
                        </td>
                        <td>
                            <button type="button" className="btn btn-primary btn-sm ">
                            Add
                            </button>
                        </td>

                        <td>
                            <button type="button" className="btn btn-danger btn-sm ">
                            Delete
                            </button>
                        </td>
                        </tr>
                        <tr className="table-row">
                        <td>
                            <div className="d-flex align-items-center">
                            <div className="ms-3">
                                <p className="fw-bold mb-1">Sub Department 2</p>
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </div>
                        </td>
                        <td>
                            <button
                                    type="button"
                                    className="btn btn-primary btn-sm fw-bold"
                                    data-mdb-ripple-color="dark"
                                    >
                            Add
                            </button>
                        </td>
                        <td>
                            <button
                                    type="button"
                                    className="btn btn-danger btn-sm fw-bold"
                                    data-mdb-ripple-color="dark"
                                    >
                            Delete
                            </button>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <div className="d-flex align-items-center">
                            <div className="ms-3">
                                <p className="fw-bold mb-1">Sub Department 3</p>
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </div>
                        </td>
                        <td>
                            <button
                                    type="button"
                                    className="btn btn-primary btn-sm fw-bold"
                                    data-mdb-ripple-color="dark"
                                    >
                            Add
                            </button>
                        </td>

                        <td>
                            <button
                                    type="button"
                                    className="btn btn-danger btn-sm fw-bold"
                                    data-mdb-ripple-color="dark"
                                    >
                            Delete
                            </button>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <div className="d-flex align-items-center">
                            <div className="ms-3">
                                <p className="fw-bold mb-1">Sub Department 4</p>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </div>
                        </td>
                        <td>
                            <button type="button" className="btn btn-primary btn-sm">
                            Add
                            </button>
                        </td>

                        <td>
                            <button type="button" className="btn btn-danger btn-sm">
                            Delete
                            </button>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <div className="d-flex align-items-center">
                            <div className="ms-3">
                                <p className="fw-bold mb-1">Sub Department 5</p>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </div>
                        </td>
                        <td>
                            <button type="button" className="btn btn-primary btn-sm">
                            Add
                            </button>
                        </td>

                        <td>
                            <button type="button" className="btn btn-danger btn-sm">
                            Delete
                            </button>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <div className="d-flex align-items-center">
                            <div className="ms-3">
                                <p className="fw-bold mb-1">Sub Department 6</p>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </div>
                        </td>
                        <td>
                            <button type="button" className="btn btn-primary btn-sm">
                            Add
                            </button>
                        </td>

                        <td>
                            <button type="button" className="btn btn-danger btn-sm">
                            Delete
                            </button>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <div className="d-flex align-items-center">
                            <div className="ms-3">
                                <p className="fw-bold mb-1">Sub Department 7</p>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </div>
                        </td>
                        <td>
                            <button type="button" className="btn btn-primary btn-sm">
                            Add
                            </button>
                        </td>

                        <td>
                            <button type="button" className="btn btn-danger btn-sm">
                            Delete
                            </button>
                        </td>
                        </tr>
  </tbody>
</table>
                </div>
            </div>
        </div>
    )
}

export default Subdepartment_summary;
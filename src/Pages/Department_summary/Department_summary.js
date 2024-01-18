import React from "react";
import "./Department_summary.css";
import Topright from "../../Components/Top_right/Top_right";

function Department_summary() {
    return(
        <div className="summary_body">
            <div className="container">
                <div className="Topright pt-5">
                    <Topright/>
                    <h2 className="fw-bold fs-4 mb-5 pt-4" style={{ color: "#434343" }}>
                        DEPARTMENT SUMMARY
                    </h2> 
                </div>

                <div className="summary">
                <table className="table align-middle  mb-0 table-striped table-hover">
                    <tbody>
                        <tr className="table-row border">
                        <td>
                            <div className="d-flex align-items-center">
                            <div className="ms-3">
                                <p className="fw-bold mb-1">Department 1</p>
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
                                <p className="fw-bold mb-1">Department 2</p>
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
                                <p className="fw-bold mb-1">Department 3</p>
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
                                <p className="fw-bold mb-1">Department 4</p>
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
                                <p className="fw-bold mb-1">Department 5</p>
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
                                <p className="fw-bold mb-1">Department 6</p>
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
                                <p className="fw-bold mb-1">Department 7</p>
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

export default Department_summary;
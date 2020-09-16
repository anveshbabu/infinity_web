import React from "react";
import { NormalButton } from '../../../common'
import './courseList.scss'
export class CoursesList extends React.Component {
    render() {
        return (
            <div>
                <div className="row course-list-page">
                    <div className="col-md-4">
                        <div className="card">
                            {/* <div className="card-header">
                                <h4>Featured</h4>
  </div> */}
                            <div className="card-body">
                                <div className="row mb-4">
                                    <div className="col-md-12">
                                        <h5 className="card-title mb-0">Special title treatment</h5>
                                        <small class="text-muted ">C-100</small>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                    <div class="d-flex mb-5 attendance-section">
													<div class="d-flex align-items-center mr-7">
														<span class="font-weight-bold mr-4">Start</span>
														<span class="btn btn-light-primary btn-sm font-weight-bold btn-upper btn-text">14 Jan, 17</span>
													</div>
													<div class="d-flex align-items-center">
														<span class="font-weight-bold mr-4">Due</span>
														<span class="btn btn-light-danger btn-sm font-weight-bold btn-upper btn-text">15 Oct, 18</span>
													</div>
												</div>
                                    </div>
                                </div>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

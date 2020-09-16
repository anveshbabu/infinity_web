import React from "react";
import { NormalButton } from '../../component/common'
import { CoursesList } from '../../component/pages'

export class Courses extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <NormalButton label="Course create" className="float-right btn-primary" onClick={() => { }} />
                        <h4 className="page-titel mb-4">
                            Courses List
                          </h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <CoursesList/>
                    </div>
                </div>

            </div>
        );
    }
}

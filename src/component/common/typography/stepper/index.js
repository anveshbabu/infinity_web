import React from "react";
import "./stepper.scss";
export class Stepper extends React.Component {
  render() {
    let { steps, activeStep } = this.props;
    return (
      <div className="row stepper-custom mb-3">
        <div className="col-12">
          <ul className="create-progress-bar">
            {steps.map(({ title }, index) => {
              return (
                <li className={`${activeStep === index + 1 ? 'active' : ''} ${index + 1 < activeStep ? 'complited' : ''}`}>
                  <span className="step-inner-wrapper">
                    <span className="step-icon">✔</span>
                    <span className="step-title">{title}</span>
                    <label className="sub-text">STEP&nbsp;{index+1}</label>
                  </span>
                 
                </li>
              )
            })}

          </ul>

        </div>
      </div>
    );
  }
}
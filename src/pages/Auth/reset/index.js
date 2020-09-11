import React from "react";
import "./reset.scss";
import {
  NormalInput,
  NormalButton,
} from "../../../component/common";
import SimpleReactValidator from 'simple-react-validator';
import { history } from "../../../helpers";
export class Reset extends React.Component {
  state = {
    resetPassForm: {
      newPassword: "",
      password: ""
    }
  };



  //on lode function
  componentWillMount() {
    localStorage.clear()
    this.validator = new SimpleReactValidator({
      element: message => <span className="error-message text-danger validNo fs14">{message}</span>,
      autoForceUpdate: this,
    });
  }






    // handle input chnage 
  handleInputChange = e => {
    const target = e.target;
    console.log(" target.name---->" + target.value);
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      resetPassForm: {
        ...this.state.resetPassForm,
        [name]: value
      }
    })
  }


  
  // handle Form Submit
  handleFormSubmit = () => {
    if (this.validator.allValid()) {
      history.push(`/dashboard`)
    } else {
      this.validator.showMessages();
    }
  }




  render() {
    let { resetPassForm } = this.state;
    return (
      <div className="row login justify-content-md-center forgot-page">
        <div className="col-md-9 col-xs-9 mb-3">

          <div className="row">
            <div className="col-md-12">
              <h4>Reset Password</h4>
            </div>
          </div>




          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <NormalInput
                  placeholder="New Password"
                  name="newPassword"
                  value={resetPassForm.newPassword}
                  className="form-control"
                  onChange={this.handleInputChange}
                />
                {this.validator.message('New Password', resetPassForm.newPassword, 'required')}
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <NormalInput
                  placeholder="Confirm New Password"
                  name="password"
                  value={resetPassForm.password}
                  className="form-control"
                  onChange={this.handleInputChange}
                />
                {this.validator.message('Password', resetPassForm.password, 'required')}
              </div>
            </div>
          </div>



          <div className="row text-center">
            <div className="col-md-12">
              <NormalButton
                onClick={this.handleFormSubmit}
                id="cancelProfile"
                label="CONTINUE"
                outline={false}
                className="mb-2 mt-5  btn-primary btn-block"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

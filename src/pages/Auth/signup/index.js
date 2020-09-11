import React from "react";
import "./signup.scss";
import {
  NormalInput,
  NormalButton} from "../../../component/common";
import { Link } from "react-router-dom";
export class SignUp extends React.Component {
  state = {
    loginForm: {
      isKeepMe: false,
      email: "",
      password: ""
    }
  };
  handleChange = e => {
    const target = e.target;
    console.log(" target.name---->" + target.value);
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      loginForm: {
          ...this.state.loginForm,
          [name]: value
      }
  })
  };
  render() {
    let { loginForm } = this.state;
    return (
      <div className="row login justify-content-md-center sigin-page ">
        <div className="col-md-9 col-xs-9 mb-3">
          <h4>Forgot Password</h4>
        </div>
        <div className="col-md-9 col-xs-9">
          <form>
            <div className="form-group mb-3">
              <NormalInput
                placeholder="Email Address"
                name="email"
                value={loginForm.email}
                className="form-control"
                onChange={e => this.handleChange(e)}
              />
            </div>
           
            <Link to='/login' >Back to Login </Link>
           
            <Link to="/reset/">
              <NormalButton
                onClick={this.handleDiscard}
                id="cancelProfile"
                label="submit"
                outline={false}
                className="mb-2 mt-3  btn-primary btn-block"
              />
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

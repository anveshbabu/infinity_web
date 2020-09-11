import React from "react";
import "./forgot.scss";
import { NormalInput, NormalButton } from "../../../component/common";
import SimpleReactValidator from 'simple-react-validator';
// import { history } from "../../../helpers";
import { Link } from "react-router-dom";
import { UserForgotPassword } from "../../../redux/actions/login";
import { LOGIN_TYPE } from "../../../service/constants";
export class Forgot extends React.Component {
  state = {
    forgotPassForm: {
      email: "",
      userType: LOGIN_TYPE.ADMIN
    },
    isFormLoder: false,
  };




  //on lode function start
  componentWillMount() {
    localStorage.clear()
    this.validator = new SimpleReactValidator({
      element: message => <span className="error-message text-danger validNo fs14">{message}</span>,
      autoForceUpdate: this,
    });
  }





  // handle input chnage start
  handleInputChange = e => {
    let { value, name } = e.target;
    this.setState({
      forgotPassForm: {
        ...this.state.forgotPassForm,
        [name]: value
      }
    })
  }



  // handle Form Submit
  handleFormSubmit = () => {
    let { forgotPassForm } = this.state;
    if (this.validator.allValid()) {
      this.setState({ isFormLoder: true })
      UserForgotPassword(forgotPassForm).then((data) => {
        this.setState({ isFormLoder: false })

      }).catch((error) => {
        this.setState({ isFormLoder: false })
      })
    } else {
      this.validator.showMessages();
    }
  }




  render() {
    let { forgotPassForm,isFormLoder } = this.state;
    return (
      <div className="row login justify-content-md-center forgot-page">
        <div className="col-md-9 col-xs-9 mb-3">

          <div className="row">
            <div className="col-md-12">
              <h4>Forgot Password</h4>
              <label className="sub-title">Please enter your email </label>
            </div>
          </div>


          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <NormalInput
                  placeholder="Email"
                  name="email"
                  value={forgotPassForm.email}
                  className="form-control"
                  onChange={this.handleInputChange}
                />
                {this.validator.message('Email', forgotPassForm.email, 'required|email')}
              </div>
            </div>
          </div>



          <div className="row text-center">
            <div className="col-md-12">
              {/* <Link to="/dashboard/"> */}
              <NormalButton
                onClick={this.handleFormSubmit}
                id="cancelProfile"
                label="SUBMIT"
                outline={false}
                loader={isFormLoder}
                className="mb-2 mt-5  btn-primary btn-block"
              />
              {/* </Link> */}
              <Link to="/auth/login/">
                <NormalButton
                  onClick={() => { }}
                  id="cancelProfile"
                  label="Back to Login"
                  outline={false}
                  className="mb-2 mt-3  btn-link "
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

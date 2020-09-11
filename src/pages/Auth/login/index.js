import React from "react";
import "./login.scss";
import {
  NormalInput,
  NormalButton,
  NormalCheckbox
} from "../../../component/common";
import { Link } from "react-router-dom";
import SimpleReactValidator from 'simple-react-validator';
import { userSignin } from "../../../redux/actions/login";
import { history } from "../../../helpers";
import { LOGIN_TYPE, EXIST_LOCAL_STORAGE } from "../../../service/constants";
export class Login extends React.Component {
  state = {
    loginForm: {
      username: "",
      password: "",
      userType: LOGIN_TYPE.ADMIN
    },
    isFormLoder: false,
    isKeepMe: false,
    keepMeObj: {
      username: "",
      password: "",
      userType: LOGIN_TYPE.ADMIN
    }
  };



  //on lode function start
  componentWillMount() {
    //keep login function start
    let isKeepMe = localStorage.getItem(EXIST_LOCAL_STORAGE.IS_KEEP_ME);
    let keepMeObj = JSON.parse(localStorage.getItem(EXIST_LOCAL_STORAGE.KEEP_ME_OBJ));
    localStorage.clear();
    if (isKeepMe === '1') {
      keepMeObj = Object.assign({}, keepMeObj);
      this.setState({ isKeepMe, loginForm: keepMeObj });
      localStorage.setItem(EXIST_LOCAL_STORAGE.IS_KEEP_ME, isKeepMe);
      localStorage.setItem(EXIST_LOCAL_STORAGE.KEEP_ME_OBJ, JSON.stringify(keepMeObj));
    } else {
      this.setState({ isKeepMe: false });
    }



    //validation set function start
    this.validator = new SimpleReactValidator({
      element: message => <span className="error-message text-danger validNo fs14">{message}</span>,
      autoForceUpdate: this,
    });
  }


  //handle input change function call start
  handleInputChange = e => {
    let { value, name } = e.target;
    this.setState({
      loginForm: {
        ...this.state.loginForm,
        [name]: value
      }
    })
  };


  //login submit API call function  start
  handleSubmit = () => {
    let { loginForm, keepMeObj, isKeepMe } = this.state;
    this.setState({ isResErr: false })
    if (this.validator.allValid()) {
      this.validator.hideMessages();
      this.setState({ isFormLoder: true });
      userSignin(loginForm).then((data) => {
        console.log(isKeepMe)
        if (!!data) {
          localStorage.setItem(EXIST_LOCAL_STORAGE.USER_ID, data);
          if (isKeepMe) {
            keepMeObj.username = loginForm.username;
            keepMeObj.password = loginForm.password;
            this.setState({ keepMeObj });
            localStorage.setItem(EXIST_LOCAL_STORAGE.IS_KEEP_ME, 1);
            localStorage.setItem(EXIST_LOCAL_STORAGE.KEEP_ME_OBJ, JSON.stringify(keepMeObj));
          } else {
            localStorage.setItem(EXIST_LOCAL_STORAGE.IS_KEEP_ME, 0);
            localStorage.setItem(EXIST_LOCAL_STORAGE.KEEP_ME_OBJ, JSON.stringify(keepMeObj));
          }
          history.push(`/dashboard`)
        }
        this.setState({ isFormLoder: false })
      }).catch((error) => {
        this.setState({ isFormLoder: false })
        let err = error ? error.error : '';
        if (err === 'Invalid combination. Have another go.') {
          this.setState({ isResErr: true })
        } else {
        }

      })

    } else {
      this.validator.showMessages();
    }

  }

  // handlekeep me change start
  handleisKeepMeChange = () => {
    let { isKeepMe } = this.state;
    this.setState({ isKeepMe: !isKeepMe });
  }

  render() {
    let { loginForm, isFormLoder, isResErr, isKeepMe } = this.state;
    return (
      <div className="row login justify-content-md-center login-page">
        <div className="col-md-9 col-xs-9">
          <div className="row">
            <div className="col-md-12 title">
              <h4>Sign in to access Juggle</h4>
              <h4>Super Admin Portal</h4>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <NormalInput
                  placeholder="Email Address"
                  name="username"
                  value={loginForm.username}
                  className="form-control"
                  onChange={this.handleInputChange}
                />
                {this.validator.message('User Name', loginForm.username, 'required|email')}
              </div>
              <div className="form-group">
                <NormalInput
                  placeholder="Password"
                  name="password"
                  value={loginForm.password}
                  className="form-control"
                  onChange={this.handleInputChange}
                />
                {this.validator.message('Password', loginForm.password, 'required')}
                {isResErr ?
                  <span className="text-danger validNo fs14">
                    Email ID or Password entered is incorrect.
                  </span> : ''}
              </div>
              <Link className="float-right" to="/auth/forgot">Forgot Password  </Link>
              <div className="form-group form-check float-left pl-0 mb-5 login-checkbox">
                <NormalCheckbox
                  name="isKeepMe"
                  checked={isKeepMe}
                  label="Keep me signed in"
                  id="isKeepMe"
                  onChange={this.handleisKeepMeChange}
                />

              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <NormalButton
                onClick={this.handleSubmit}
                id="cancelProfile"
                label="sign in"
                outline={false}
                loader={isFormLoder}
                className="mb-2  btn-primary btn-block"
              />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

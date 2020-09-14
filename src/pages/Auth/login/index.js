import React from "react";
import "./login.scss";
import {
  NormalInput,
  NormalButton,
  NormalCheckbox
} from "../../../component/common";
// import { Link } from "react-router-dom";
import SimpleReactValidator from 'simple-react-validator';
import { userSignin } from "../../../redux/actions/login";
import { history } from "../../../helpers";
import { EXIST_LOCAL_STORAGE } from "../../../service/constants";
export class Login extends React.Component {
  state = {
    loginForm: {
      username: "",
      password: "",
    },
    passwordType: 'password',
    isFormLoder: false,
    isKeepMe: false,
    keepMeObj: {
      username: "",
      password: "",
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
    let { loginForm, isKeepMe, keepMeObj } = this.state;
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
    let { loginForm, isFormLoder, isResErr, isKeepMe, passwordType } = this.state;
    return (

      <>

        <div className="card shadow zindex-100 mb-0">
          <div className="card-body px-md-5 py-5">
            <div className="mb-5">
              <h6 className="h3">Login</h6>
              <p className="text-muted mb-0">Sign in to your account to continue.</p>
            </div>
            <span className="clearfix"></span>

            <div className="form-group">
              <label className="form-control-label">User Name</label>
              <div className="input-group input-group-merge">
                <div className="input-group-prepend">
                  <span className="input-group-text material-icons">person</span>
                </div>
                <NormalInput
                  placeholder="Email address or phone number"
                  name="username"
                  value={loginForm.username}
                  className="form-control border-left-0"
                  onChange={this.handleInputChange}
                />

              </div>
              {this.validator.message('User Name', loginForm.username, 'required')}
            </div>
            <div className="form-group mb-4">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <label className="form-control-label">Password</label>
                </div>
                {/* <div className="mb-2">
                    <a href="#!" className="small text-muted text-underline--dashed border-primary">Lost password?</a>
                  </div> */}
              </div>
              <div className="input-group input-group-merge">
                <div className="input-group-prepend">
                  <span className="input-group-text material-icons">vpn_key</span>
                </div>
                <NormalInput
                  placeholder="Password"
                  name="password"
                  type={passwordType}
                  value={loginForm.password}
                  className="form-control border-left-0  border-right-0"
                  onChange={this.handleInputChange}
                />
                <div className="input-group-append">
                  <span className="input-group-text material-icons cursor-pointer" onClick={() => { this.setState({ passwordType: passwordType === 'password' ? 'text' : 'password' }) }}>
                    {passwordType === 'password' ? 'remove_red_eye' : 'visibility_off'}
                  </span>
                </div>
              </div>
              {this.validator.message('Password', loginForm.password, 'required')}
              {isResErr ?
                <span className="text-danger validNo fs14">
                  Email ID or Password entered is incorrect.
                  </span> : ''}
            </div>
            <div className="form-group form-check float-left pl-0 mb-5 login-checkbox">
              <NormalCheckbox
                name="isKeepMe"
                checked={isKeepMe}
                label="Keep me signed in"
                id="isKeepMe"
                onChange={this.handleisKeepMeChange}
              />

            </div>
            <div className="mt-4">
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
          {/* <div className="card-footer px-md-5"><small>Not registered?</small>
            <a href="#" className="small font-weight-bold">Create account</a></div> */}
        </div>
        {/* <div className="row login justify-content-md-center login-page">
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
        </div> */}
      </>
    );
  }
}

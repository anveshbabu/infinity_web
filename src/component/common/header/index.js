import React from "react";
import "./header.scss";
import user from '../../../assets/images/user.png';
import { Link } from "react-router-dom";
export class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light border-bottom">
        {/* <button className="btn btn-primary" id="menu-toggle">Toggle Menu</button> */}
        <button className="menu-toggler" type="button">
          <i className="material-icons">menu</i>
        </button>
        <Link className="navbar-brand" to="/dashboard/">
         <h4 className="text-white">Template</h4>
        </Link>
        <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex user-detail">
        <li> <Link to="/dashboard/">    <img src={user} alt="Logo"  /> Super Admin</Link></li>
         <li className="ml-2"> <Link to="/auth/login"> <i className="material-icons">power_settings_new</i> Logout</Link></li>

  </ul>
      </nav>
    );
  }
}

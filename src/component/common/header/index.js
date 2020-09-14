import React from "react";
import "./header.scss";
import user from '../../../assets/images/user.png';
import { Link } from "react-router-dom";
export class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light mb-4">

        <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex user-detail">
          <li> <Link to="/dashboard/">    <img src={user} alt="Logo" /> Super Admin</Link></li>
          <li className="ml-2"> <Link to="/auth/login"> <i className="material-icons">power_settings_new</i> Logout</Link></li>

        </ul>
      </nav>
    );
  }
}

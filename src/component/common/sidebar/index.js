import React from "react";
import "./simple-sidebar.scss";
import { NavLink } from "react-router-dom";
import menu from "./menu";
export class Sidebar extends React.Component {
  handleSubMenu = mennuId => {
    console.log("this is:", mennuId);
    let submenuElem = document.getElementById(mennuId);
    submenuElem.classList.toggle("show");
  };
  render() {
    return (
      // <!-- Sidebar -->
      <div className="bg-white shadow" id="sidebar-wrapper">
        <div className="list-group list-group-flush">
          {menu.map(({ to, icon, text, submenu }, index) => {
            if (submenu.length > 0) {
              return (
                <>
                  <div
                    key={index}
                    className="list-group-item list-group-item-action bg-white"
                    to={to}
                    onClick={e => this.handleSubMenu(text.trim())}
                    id={text.trim()}
                  >
                   <span className="material-icons">{icon}</span> {text}
                    <i className="fas fa-chevron-down down-aero float-right"></i>
                    <i className="fas fa-chevron-down up-aero float-right"></i>
                    <div className="list-group list-group-flush sub-menu m-0">
                      {submenu.map(({ to, text }, index) => {
                        return (
                          <div key={index}>
                            <NavLink
                              to={to}
                              activeClassName="active"
                              className="list-group-item list-group-item-action  bg-white"
                            >
                              {text}
                            </NavLink>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              );
            } else {
              return (
                <div key={index}>
                  <NavLink
                    className="list-group-item list-group-item-action bg-white"
                    activeClassName="active"
                    to={to}
                  >
                     <span className="material-icons">{icon}</span> {text}
                  </NavLink>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default Sidebar;

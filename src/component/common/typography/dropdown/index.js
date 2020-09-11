import React from "react";
import "./dropdown.scss";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { AbIf } from "../abIf";
export class NormalDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownId: Math.floor(100000 + Math.random() * 900000),
      isOpen: false
    }

  }
  handleDropdown = () => {
    // console.log("this is:", mennuId);
    // let submenuElem = document.getElementById(mennuId);
    // submenuElem.classList.toggle("show");
    this.setState({ isOpen: !this.state.isOpen })
  };

  render() {
    const {
      className = "",
      label = "",
      labelIcon = "",
      onClick,
      disabled = false,
      caret = true,

      // alinement = "",
      optionsList = [],
      // id = ''
    } = this.props;
    let { isOpen } = this.state;
    return (


      <ButtonDropdown disabled={disabled} isOpen={isOpen} toggle={this.handleDropdown}>
        {/* <Button id="caret" >{label ? label : ''}  {isOpen ? <i className="fas fa-chevron-up ml-2"></i> : <i className="fas fa-chevron-down ml-2"></i>}</Button> */}
        <DropdownToggle disabled={disabled} caret className={className} >


          {label ? label : <i className={labelIcon}></i>} <AbIf show={caret}>{isOpen ? <i className="fas fa-chevron-up ml-2"></i> : <i className="fas fa-chevron-down ml-2"></i>} </AbIf>
        </DropdownToggle>

        <DropdownMenu alinement >
          {optionsList.map(({ label, icon }, i) =>
            <DropdownItem onClick={e => {
              let body = {};
              body = {
                target: {
                  value: label,
                  data: optionsList[i]
                }
              }
              // this.handleDropdown(id)
              onClick(body);
            }}><img src={icon} className="mr-1" alt="" /> {label}</DropdownItem>
          )}
          {/* <DropdownItem onClick={this.signOut}>Sign Out</DropdownItem> */}

        </DropdownMenu>
      </ButtonDropdown>


    );
  }
}

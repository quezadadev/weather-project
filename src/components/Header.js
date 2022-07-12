import React from 'react';
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavItem, NavLink, NavbarText, NavbarToggler, UncontrolledDropdown } from 'reactstrap';

const Header = () => {
  return (
    <div className=''>
    <Navbar
      color="light"
      expand="md"
      light
    >
  
      <h2 className='m-3'> 
        Weather Byte 
      </h2>
      
    </Navbar>
  </div>
  )
}

export default Header;
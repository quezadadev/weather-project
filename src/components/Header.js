import React from 'react';
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavItem, NavLink, NavbarText, NavbarToggler, UncontrolledDropdown } from 'reactstrap';

const Header = () => {
  return (
    <div>
    <Navbar
      color="light"
      expand="md"
      light
    >
  
      <h2 className='ml-auto m-3'> Weather Byte </h2>
      
    </Navbar>
  </div>
  )
}

export default Header;
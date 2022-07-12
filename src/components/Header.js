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
      <NavbarBrand href="/">
        <h2 className='text-center'> Weatherboard </h2>
      </NavbarBrand>
      <NavbarToggler onClick={function noRefCheck(){}} />
      {/* <h2 className='text-center'> Weatherboard </h2> */}
      
    </Navbar>
  </div>
  )
}

export default Header;
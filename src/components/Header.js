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
      <div className='mt-3 mb-3' style={{"margin": "0 auto"}}>
      <h2 className='text-secondary'> 
        Weather Byte
  
      </h2>
      
      </div>
      
    </Navbar>
  </div>
  )
}

export default Header;
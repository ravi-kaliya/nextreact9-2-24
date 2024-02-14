// components/CustomNavbar.js
import { useState } from 'react';
import Link from 'next/link';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const CustomNavbar = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  const handleMegaMenuToggle = () => {
    setShowMegaMenu(!showMegaMenu);
  };

  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Link href='/'>
          <Navbar.Brand>Next.js Bootstrap Mega Menu</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='navbar-nav' />
        <Navbar.Collapse id='navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
            <NavDropdown
              title='Products'
              id='basic-nav-dropdown'
              onMouseEnter={handleMegaMenuToggle}
              onMouseLeave={handleMegaMenuToggle}
            >
              {/* Mega Menu Content */}
              <div className={`mega-menu ${showMegaMenu ? 'show' : ''}`}>
                <Container>
                  <div className='row'>
                    <div className='col-md-4'>
                      <h5>Category 1</h5>
                      <ul>
                        <li>
                          <Link href='/category1/product1'>Product 1</Link>
                        </li>
                        <li>
                          <Link href='/category1/product2'>Product 2</Link>
                        </li>
                        {/* Add more items as needed */}
                      </ul>
                    </div>
                    <div className='col-md-4'>
                      <h5>Category 2</h5>
                      <ul>
                        <li>
                          <Link href='/category2/product1'>Product 1</Link>
                        </li>
                        <li>
                          <Link href='/category2/product2'>Product 2</Link>
                        </li>
                        {/* Add more items as needed */}
                      </ul>
                    </div>
                    <div className='col-md-4'>
                      <h5>Category 3</h5>
                      <ul>
                        <li>
                          <Link href='/category3/product1'>Product 1</Link>
                        </li>
                        <li>
                          <Link href='/category3/product2'>Product 2</Link>
                        </li>
                        {/* Add more items as needed */}
                      </ul>
                    </div>
                  </div>
                </Container>
              </div>
            </NavDropdown>
            <Nav.Link href='/contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

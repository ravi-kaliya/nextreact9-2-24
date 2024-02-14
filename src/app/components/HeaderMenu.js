'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import logo from '../../../public/assets/images/logo/logo.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Dropdown,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  Container,
  Row,
  Col,
  DropdownItem,
  UncontrolledDropdown,
} from 'reactstrap';
import Link from 'next/link';
function HeaderMenu(args) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div>
      <Navbar
        {...args}
        dark
        color='dark'
        className='main-nav'
        fixed='top'
        expand='lg'
      >
        <NavbarBrand href='/'>
          <Image src={logo} alt='logo' />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ms-auto' navbar>
            <NavItem>
              <NavLink href='/'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/products/2'>Product2</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#'>Programmes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#'>Specials</NavLink>
            </NavItem>
            <UncontrolledDropdown nav>
              <DropdownToggle nav caret>
                Products
              </DropdownToggle>
              <DropdownMenu>
                <Container className='p-2'>
                  <Row className='flex-nowrap'>
                    <Col>
                      <Row className='flex-nowrap'>
                        <Col>
                          <Image
                            className='rounded'
                            src={`https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                            alt={`mobile Images`}
                            width={200}
                            height={200}
                          />
                        </Col>
                        <Col>
                          <h5>Electronics</h5>
                          <DropdownItem>
                            <Link href={'/'}> Laptops </Link>
                          </DropdownItem>
                          <DropdownItem>
                            <Link href={'/'}> Smartphones </Link>
                          </DropdownItem>
                          <DropdownItem>
                            <Link href={'/'}> Cameras </Link>
                          </DropdownItem>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row className='flex-nowrap'>
                        <Col>
                          <Image
                            className='rounded'
                            src={`https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                            alt={`mobile Images`}
                            width={200}
                            height={200}
                          />
                        </Col>
                        <Col>
                          <h5>Clothing</h5>
                          <DropdownItem>
                            <Link href={'/'}> Men Clothing </Link>
                          </DropdownItem>
                          <DropdownItem>
                            <Link href={'/'}> Women Clothing </Link>
                          </DropdownItem>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem></NavItem>
            <UncontrolledDropdown nav>
              <DropdownToggle nav caret>
                Body
              </DropdownToggle>
              <DropdownMenu>
                <Container className='p-2'>
                  <Row className='flex-nowrap'>
                    <Col>
                      <Row className='flex-nowrap'>
                        <Col>
                          <Image
                            className='rounded'
                            src={`https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                            alt={`mobile Images`}
                            width={200}
                            height={200}
                          />
                        </Col>
                        <Col>
                          <h5>Full Body</h5>
                          <DropdownItem>Body Full</DropdownItem>
                          <DropdownItem>
                            <Link href={'/'}> Body 2 </Link>
                          </DropdownItem>
                          <DropdownItem>
                            <Link href={'/'}> Body 3 </Link>
                          </DropdownItem>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row className='flex-nowrap'>
                        <Col>
                          <Image
                            className='rounded'
                            src={`https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                            alt={`mobile Images`}
                            width={200}
                            height={200}
                          />
                        </Col>
                        <Col>
                          <h5>Clothing</h5>
                          <DropdownItem>
                            <Link href={'/'}> Men Clothing </Link>
                          </DropdownItem>
                          <DropdownItem>
                            <Link href={'/'}> Women Clothing </Link>
                          </DropdownItem>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href='#'>Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#'>Contact</NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HeaderMenu;

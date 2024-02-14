'use client';
import { IoSettings, IoSunny } from 'react-icons/io5';
import { useContext, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SidebarIconTabs from './SidebarIconTabs';
import { MdDarkMode } from 'react-icons/md';
import { ThemeContext } from '../context/ThemeContext';
import { Button } from 'react-bootstrap';

function SettingOffset1() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button
        className='light-button text-white bg-dark'
        onClick={theme === 'light' ? switchDark : switchLight}
      >
        {theme === 'light' ? '🌙' : '😎'}
      </Button> */}
      <IoSettings
        className='offcanvasset text-white bg-primary'
        onClick={handleShow}
      />

      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Body>
          <SidebarIconTabs />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SettingOffset1;

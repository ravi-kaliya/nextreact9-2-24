import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';

const SocialIcon = () => {
  return (
    <div className='sticky-social-icons rounded '>
      <span className='Sicon shadow-lg'>
        <FaFacebook />
      </span>

      <span className='Sicon shadow-lg'>
        <FaTwitter />
      </span>
      <span className='Sicon shadow-lg'>
        <FaYoutube />
      </span>
      <span className='Sicon shadow-lg'>
        <FaInstagram />
      </span>
      <span className='Sicon shadow-lg'>
        <FaWhatsapp />
      </span>
    </div>
  );
};

export default SocialIcon;

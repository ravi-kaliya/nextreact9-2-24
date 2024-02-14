import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Badge } from 'reactstrap';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const SidebarContent = ({ heading,badgeColor,badge,description } = {}) => {
  return (
    <>
      <Card border='primary' className=''>
        <Card.Header className='card-header'>
          <h5 className='m-0'>{heading}</h5>
          <Badge color={badgeColor} className='d-flex align-items-center'>
            {badge}
          </Badge>
        </Card.Header>
        <Card.Body>
          <Card.Title>Verify OTP for Refunds</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <div className='text-end'>
          <Button variant='link' >Read More <FaArrowRightLong /></Button>
          </div>
        </Card.Body>
      </Card>
      <div className='sidebar-navigation d-flex justify-content-between'>
        
          <Button variant='link' ><FaArrowLeftLong /> Prev </Button>
          <Button variant='link' >Next <FaArrowRightLong /></Button>
      </div>
      <div className='text-center'>
          <Button variant='link'>View All Announcments</Button>
      </div>
    </>
  );
}

export default SidebarContent;

import React from 'react'



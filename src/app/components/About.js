import Image from 'next/image';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const About = () => {
  return (
    <section id='about' className='py-5'>
      <Container>
        <h2 className='text-center mb-4'>About Us</h2>
        <Row>
          <Col md='6'>
            <Image
              src='https://skyyogashala.com/wp-content/uploads/2021/05/SkyYoga-Shala-Best-Yoga-Classes-in-Gurgaon-Overview.jpg'
              alt='About Us'
              width={700}
              height={1000}
              className='img-fluid rounded'
            />
          </Col>
          <Col md='6'>
            <p className='text-justify'>
              Welcome to SkyYoga Shala Best Classes in Gurgaon, Targets
              spreading the embodiment of Yoga through unadulterated yogic
              training that streams directly from the mainstays of Vedic
              Science. Being involved in of vivid yoga trainings drove by our
              respected yoga Gurus will help you set morale norms for your life.
            </p>
            <p className='text-justify'>
              Our yoga instructor while preparing programs accompany Yoga
              Alliance Certification with the best expectations of the plans and
              requirements. We’ve been directed towards making profoundly
              motivating retreats to give you the inward harmony you’ve been
              looking for.
            </p>
            <p className='text-justify'>
              thoughtful space inside oneself. We likewise have standard
              projects of yoga classes in studio, home yoga classes in Gurgaon,
              corporate yoga classes, workshops and that’s just the beginning.
              The point is to propel individuals towards a better way of life
              through yogic orders, while breathing and carrying on with a
              metropolitan way of life.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

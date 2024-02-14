import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ProductDetails = (params) => {
  return (
    <div>
      <Container>
        <Row>
          <Col className='h-75'>ProductDetails {params.product}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetails;

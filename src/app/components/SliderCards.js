import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col,
  Badge,
} from 'reactstrap';
import axios from 'axios';
import { FaGithub, FaLink } from 'react-icons/fa';
import Image from 'next/image'; // Import the correct Image component
import Link from 'next/link';

const SliderCards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then(function (response) {
        setProducts(response.data.products);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Container className='mx-auto my-5'>
      <>
        <h1 className='p-3 mb-3 text-center'>
          Sky Yoga Shala <Badge color='success'>Products</Badge>
        </h1>
      </>
      <Row>
        {products.map((product) => (
          <Col lg={3} md={4} sm={12} className='p-2' key={product.id}>
            <Card>
              {/* Use the correct Image component */}
              <Image
                src={product.thumbnail}
                width={200}
                height={200}
                className='card-img-top'
                alt='...'
              />
              <CardBody>
                <CardTitle>
                  <h4>{product.title}</h4>
                </CardTitle>
                <CardSubtitle className='mb-2 text-muted'>
                  {product.category.toUpperCase()} - {product.brand}
                </CardSubtitle>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </p>
                <div className='d-flex justify-content-between'>
                  <Link href={`products/${product.id}`}>
                    <Button className='mr-2 bg-primary'>
                      <FaLink /> Visit
                    </Button>
                  </Link>

                  <Button className='bg-dark'>
                    <FaGithub /> Github
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SliderCards;

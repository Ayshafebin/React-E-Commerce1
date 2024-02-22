import React, { useContext, useState } from "react";
import { Card, Button, Container, Row, Col, ListGroup } from 'react-bootstrap';
import "./Shoe.css";
import { MyContext } from "./Context";
import { useParams } from "react-router-dom";
import Counter from "./Counter";
import { useSelector } from 'react-redux';

const Cart = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
console.log(isAuthenticated)
  const { id } = useParams();
  const pid = id;
  const { Product, cartItems, setCartItems ,qty, setQty} = useContext(MyContext);
  const prdid = cartItems.map((value) => value.productId);
  const [d, setD] = useState(0)
  const addproduct = Product.filter((product) => prdid.includes(product.id));
  const totalsum = addproduct.map((item)=>item.prize*item.qty)
  const totalPrize = totalsum.reduce((acc, crrnt)=>acc+crrnt,0)

  const del = (id) => {

    setCartItems((b) => b.filter((x) => x.productId !== id));
  };
  return (
    <section className="h-100 gradient-custom">
      <Container className="py-5">
        <Row className="d-flex justify-content-center my-4">
          <Col md={8}>
            <Card className="mb-4">
              <Card.Header>
                <h5 className="mb-0">Cart - {addproduct.length} items</h5>
              </Card.Header>
              <Card.Body>
                {addproduct.map((product) => (
                  <Row key={product.id}>
                    <Col lg={3} md={12} className="mb-4 mb-lg-0">
                      {/* Image */}
                      <div className="bg-image hover-overlay hover-zoom ripple rounded">
                        <img src={product.src} alt={product.name} className="w-100" />
                        <a href="#!">
                          <div
                            className="mask"
                            style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                          ></div>
                        </a>
                      </div>
                      {/* Image */}
                    </Col>

                    <Col lg={5} md={6} className="mb-4 mb-lg-0">
                      {/* Data */}
                      <p>
                        <strong>{product.name}</strong>
                      </p>
                      
                      <Button
                        variant="primary"
                        size="sm"
                        className="me-1 mb-2"
                        title="Remove item"
                        onClick={() => del(product.id)}
                      >
                       delete
                      </Button>
                      {/* Data */}
                    </Col>

                    <Col lg={4} md={6} className="mb-4 mb-lg-0">
                      {/* Quantity */}
                      <div className="d-flex mb-4" style={{ maxWidth: '300px' }}>
                        {/* You can add quantity logic here */}
                      </div>
                     <Counter obj = {product} dummy={setD}/>
                      {/* Price */}
                      <p className="text-start text-md-center">
                        <strong>{product.prize}</strong>
                      </p>
                      {/* Price */}
                    </Col>
                  </Row>
                ))}
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Header>
                <h5 className="mb-0">Summary</h5>
              </Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span>${}</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>Gratis</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount (including VAT)</strong>
                    </div>
                    <span>
                      <strong>{totalPrize}</strong>
                    </span>
                  </ListGroup.Item>
                </ListGroup>
                <Button variant="primary" size="lg" block>
                  Go to checkout
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Cart;

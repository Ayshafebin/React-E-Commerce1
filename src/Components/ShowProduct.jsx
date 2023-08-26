import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "./ProductDatas";
import { Card, Button } from "react-bootstrap";
import { MyContext } from "./Context";
import './Shoe.css';


const ShowProduct = () => {

    const mynav = useNavigate();
  const { id } = useParams();
  const pid = id;

  const { Product } = useContext(MyContext);

  const filterproduct = Product.filter((product) => product.id === pid);

  return (
    <div className="show-product">
      <div className="card-product">
        {filterproduct.map((product) => (
          <div key={product.id} className="key-product">
            <Card>
              <Card.Img variant="top" src={product.src} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.type}</Card.Text>
                <Card.Text>{product.des}</Card.Text>
                <Card.Text>{product.prize}</Card.Text>
                <Button onClick={()=>mynav(`/cart/${id}`)} variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowProduct;

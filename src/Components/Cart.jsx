import React, { useContext, useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./Shoe.css";
import { MyContext } from "./Context";
import { useParams } from "react-router-dom";

const Cart = () => {
  const { id } = useParams();
  const pid = id;
  const {Product,qty, setQty} = useContext(MyContext)

  const addproduct = Product.filter((product)=>
  product.id === pid)

  

  const total = addproduct[0].prize*qty;

  return (
    <div className="show-product">
    <div className="card-product">
      {addproduct.map((product) =>(
        <div key={product.id} >
      <Card>
        <Card.Img variant="top" src={product.src} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.type}</Card.Text>
          <Card.Text>{product.des}</Card.Text>
          
          <button onClick={()=>setQty(qty+1)}>+</button><h2>{qty}</h2>
           <button onClick={()=>setQty(qty-1 > 0 ? qty-1:1)}>-</button> 
           <div>Totalprize:{total}</div>
        </Card.Body>
      </Card>
      </div>
      ))}
    </div>
    </div>
  );
};

export default Cart;

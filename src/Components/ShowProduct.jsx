import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { Product } from "./ProductDatas";
import { Card, Button } from "react-bootstrap";
import { MyContext } from "./Context";
import './Shoe.css';


const ShowProduct = () => {

    const mynav = useNavigate();
  const { id } = useParams();
  const pid = id;
 

  const { Product, cartItems, setCartItems ,username} = useContext(MyContext);
  const prdId = cartItems.map(value=>value.productId)
  console.log(prdId);
  const addproduct = Product.filter((product) => product.id === pid);
  // const total = addproduct[0].prize * qty;
  console.log(cartItems);

  
  const addToCart = () => {
    if(username!==""){
      if(prdId.includes(pid)){
        alert('Product already exist');
      }else{
        setCartItems([...cartItems,{productId:pid}]);
        mynav(`/cart`)
      }
  
    }else{
      alert('must login')
    }
  };
   
  return (
    <div className="show-product">
      <div className="card-product">
        {addproduct.map((product) => (
          <div key={product.id} className="key-product">
            <Card>
              <Card.Img variant="top" src={product.src} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.type}</Card.Text>
                <Card.Text>{product.des}</Card.Text>
               

                <Card.Text>{product.prize}</Card.Text>
                <Button onClick={addToCart}variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowProduct;

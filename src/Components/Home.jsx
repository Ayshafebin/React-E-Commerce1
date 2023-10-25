import React from "react";
import "./Shoe.css";
import Navbar1 from "./Navbar";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Home = () => {
  const mynav = useNavigate();
  return (
    <div>
      <Navbar1 />

      


      <div className=" main">
        <div className="bg-img">
          <div className="bg-img-text">
            <h1 className="bg-img-h1">
              Love the Planet <br />
              we walk on
            </h1>
            <p className="bg-img-text-1">
              Bibendum fermentum, aenean donec pretium aliquam <br /> blandit
              tempor imperdiet arcu arcu ut nunc in dictum <br /> mauris at ut.
            </p>
          </div>
          <div>
            <button onClick={() => mynav("/men")} className="shop-men">
              SHOP MEN
            </button>
            <button onClick={() => mynav("/women")} className="shop-women">
              SHOP WOMEN
            </button>
          </div>
        </div>
      </div>
      <div className="as-seen-in">
        AS SEEN IN:
        
      </div>
    </div>
  );
};

export default Home;

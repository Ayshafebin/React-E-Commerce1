import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Dropdown,Image }from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { MyContext } from './Context';

const Search = () => {
  const { Product } = useContext(MyContext);
  const [searchQuery, setSearchQuery] = useState('');
const nav=useNavigate()
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = Product.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      
      <Dropdown >
      
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='bg-transparent shadow-none border-0 overflow-hidden'>
      <Form className="d-flex ">
      
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2 my-2"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <Button className="my-1 my-2" variant="outline-success">Search</Button>
      </Form>

      </Dropdown.Toggle>

      <Dropdown.Menu align="end"  className='overflow-hidden'>
      {filteredProducts.map((item) => (
        <Dropdown.Item  className='w-25 ' onClick={()=>nav(`/showproduct/${item.id}`)}>  <Image className='w-25' src={item.src}  /> {item.name}</Dropdown.Item>
      ))}
        
      </Dropdown.Menu>
    </Dropdown>

    </div>
  );
};

export default Search;
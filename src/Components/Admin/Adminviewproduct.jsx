import React, { useContext } from 'react'
import { Table,Button } from 'react-bootstrap';
import { MyContext } from '../Context';
import { useNavigate } from 'react-router-dom';

const Adminviewproduct = () => {
    const nav = useNavigate();
    const {Product,setProduct} = useContext(MyContext);
    console.log(Product);

  return (
    <div>   <div>          <h2>View Products</h2>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>curent Price</th>
          <th>Edit product</th>
          <th>Delete product</th>
        </tr>
      </thead>
      <tbody>
        {Product.map((products,i) => (
          <tr key={products.id}>
            <td>{products.id}</td>
            <td><img src= {products.src} alt='Photos' width={50}/></td>
            <td>{products.name}</td>
            <td>{products.prize}</td>
            <td>{products.des}</td>
            <td>
        <Button variant="primary" onClick={()=>nav(`/editproduct/${products.id}`)}>Edit</Button>
      </td>
      <td>
        <Button variant="danger" id={i} onClick={()=>setProduct(p=>p.filter((a)=>a.id!==products.id))}>Delete</Button>
      </td>
          </tr>
        ))}
      </tbody>
    </Table></div></div>
  )
}

export default Adminviewproduct
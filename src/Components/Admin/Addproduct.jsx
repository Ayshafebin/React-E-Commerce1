import React, { useContext } from 'react'
import { MyContext } from '../Context'
import { Form } from 'react-bootstrap';

function Addproduct() {
  const {Product,setProduct} = useContext(MyContext);
  const hadlesubmit =(e) => {
    e.preventDefault();
    const Name = e.target.name.value 
    const Image = e.target.src.value 
    const Price = e.target.price.value 
    const Description = e.target.description.value
    const Type = e.target.type.value

    setProduct([...Product,{id:Date.now(),name:Name,qty:1,src:Image,prize:Price,des:Description,type:Type}])
   alert("Prodect added")
   e.target.reset()
  }
  return (
    <div> <div className="container" >
    <h1>Add Product</h1>
    <form onSubmit={hadlesubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name:</label>
        <input type="text" className="form-control" id="name"  required />
      </div>
   
      
      <Form.Select id="type" title="Category" aria-label="Default select example">
    
    <option>Open this select Category</option>
    <option value="men">Men</option>
    <option value="women">Women</option>

  </Form.Select>
  <br></br>


  
      <div className="mb-3">
        <label htmlFor="src" className="form-label">Image:</label>
        <input type="text" className="form-control" id="src"  required />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">Price:</label>
        <input type="text" className="form-control" id="price"   required />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description:</label>
        <textarea className="form-control" id="description"   required />
      </div>
      <button  className="btn btn-primary">Add Product</button>
    </form>
  </div>
  </div>
  )
}

export default Addproduct
import React, { useContext } from 'react'
import { MyContext } from '../Context';
import {  useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';

function Editproduct() {
  const {Product,setProduct} = useContext(MyContext);
  const {id} = useParams();
  const filteredit = Product.filter((value)=>value.id==id) 
  const handleSubmit = (e) => {
e.preventDefault();
const updateproduct = Product.map((prdt)=>{

  const Name = e.target.name.value || prdt.name
  const Type = e.target.type.value || prdt.type
  const Image = e.target.src.value || prdt.src
  const Prize = e.target.price.value || prdt.prize
  const Des = e.target.description.value || prdt.des
  if(prdt.id===id){
    return {
      ...prdt,
      type: Type,
      name:Name,
     src:Image,
      des:Des,
      prize:Prize
    }
  }else{
    return prdt
  }
})
setProduct(updateproduct);




  }
  return (
    <div> <div className="container">
    <h1>Edit Product</h1>
   
    {filteredit.map((product) => (
      <div className=' d-flex' >
      <div className='half-screen-div'>
          <div className=''>
          <img
  src={product.src}
  alt="Photos"
  style={{ width: '200px', height: '150px' }} 
/>              </div>
          <div>
            <h1>{product.name}</h1>
            <h2>{product.type}</h2>
            <h2>{product.price}</h2>
            <h2>{product.Discription}</h2>
          </div>
         </div>
          <div key={product.id}>
          <form  id={product.id} onSubmit={handleSubmit} style={{ width: '100vh' }}>
          <div className="mb-3" >
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input type="text" className="form-control" id="name" />
          </div>

          <Form.Select id="type" title="Category" aria-label="Default select example">
            <option value="men">Men</option>
            <option value="women">Women</option>
          </Form.Select>
          <br />

          <div className="mb-3">
            <label htmlFor="src" className="form-label">
              Image:
            </label>
            <input type="text" className="form-control" id="src"  />
          </div>
          <div className="mb-3">
            <label htmlFor="prize" className="form-label">
              Price:
            </label>
            <input type="text" className="form-control" id="price"  />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <textarea className="form-control" id="description"  />
          </div>
          <button className="btn btn-primary" type='submit'>Update</button>
        </form>
        </div>
      </div>
    ))}
  </div>
</div>
  )
}

export default Editproduct
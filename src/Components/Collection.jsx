import React, { useContext } from 'react'
import { MyContext } from './Context'
import { Col, Container, Row, Card } from 'react-bootstrap'
import Navbar1 from './Navbar'
import { useNavigate } from 'react-router-dom'

const Collection = () => {
    const {Product}=useContext(MyContext);
    const mynav = useNavigate();

    const passid = (e) => {
      const id = e.target.id
      // console.log(id); 
      mynav(`/showproduct/${id}`)
    }
    const filtermen = Product.filter((Product)=>Product.type === 'men')

  return (
    <div>
        <Navbar1 />
        <div>
        <Container>
        <h1 className='collection-div'>Collection</h1>
        </Container>
       </div>
        <Container fluid className="my-5"  >
      <Row xs={1} md={2} lg={4} className="g-4">
        {Product.map((product) => (
          <Col key={product.id} className="mb-4">
            <Card>
              <div className="d-flex justify-content-between p-3" >
                <div
                  className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                  style={{ width: "35px", height: "35px" }}
                >
                  <p className="text-white mb-0 small">Shoe</p>
                </div>
              </div>
              <Card.Img
                src={product.src}
                variant="top"
                alt="shoe"
                id={product.id}
                onClick={passid}
              />
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <p className="small">
                
                  </p>
                  <p className="small text-danger">
                    {product.prize}
                  </p>
                </div>
  
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">{product.name}</h5>
                </div>
  
                <div className="d-flex justify-content-between mb-2">
                  <p className="text-muted mb-0">
                  </p>
                </div>
             
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  )
}

export default Collection
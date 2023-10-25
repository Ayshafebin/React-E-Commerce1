import React, {  useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';



const Count = (props) => {
const [quantity, setQuantity] = useState(props.obj.qty);


const decrementCount = () => {
  if (quantity > 1) {
    setQuantity(quantity - 1);
    props.obj.qty=quantity-1
    props.dummy(a => a-1)
  }
 
};

const incrementCount = () => {
  setQuantity(quantity + 1);
  props.obj.qty =quantity+1
  props.dummy(a => a+1)
};

return (
    <div>
                  <div className="d-flex mb-4" style={{ maxWidth: '300px' }}>
                        <Button variant="light" className="px-3 me-2" onClick={decrementCount}>
          <FontAwesomeIcon icon={faMinus} />
        </Button>

       <span> {quantity }</span> 
        

        <Button variant="light" className="px-3 ms-2" onClick={incrementCount}>       
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        {/* <p>{props.obj.price2*props.obj.qty}</p> */}
                    </div>
    </div>
  )
}

export default Count
import Button from 'react-bootstrap/Button';
import ProductCard from '../../components/Cards/productcard';

function ViewCard() {
    let linkeds ="data:image/jpeg;base64,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"
    const product={product_name:"Yazz Pad",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut libero iste possimus id voluptatum nisi quibusdam perspiciatis iusto facere omnis, sequi nihil in sunt?",
     category:"Protection", price:17, quantity_available:500, manufacturer:"Yazz comapany", image:linkeds}
    return ( <div>
        <div>
<div>
    <ProductCard product={product}/>
</div>
        <div className="d-flex justify-content-between p-3">
        <div>
          <Button variant="primary" >
            Edit
          </Button>
        </div>
        <div>
          <Button variant="danger">
            Delete
          </Button>
        </div>

      </div>
        </div>
    </div> );
}

export default ViewCard;
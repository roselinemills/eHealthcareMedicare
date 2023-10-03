import Button from 'react-bootstrap/Button';
import ProductCard from '../../components/Cards/productcard';
import productLink from '../../services/productLink';
import { useNavigate } from 'react-router-dom';

function ViewCard({product}) {
  const navigate = useNavigate()
  console.log(navigate)
   
   
    return ( <div>
        <div className='border'>
<div>
    <ProductCard product={product}/>
</div>
        <div className="d-flex justify-content-between p-3">
        <div>
          <Button variant="primary" onClick={()=>{navigate('edit',{state:{product}})}} >
            Edit
          </Button>
        </div>
        <div>
          <Button variant="danger" onClick={async()=>{await productLink.getdelete(1)}}>
            Delete
          </Button>
        </div>

      </div>
        </div>
    </div> );
}

export default ViewCard;
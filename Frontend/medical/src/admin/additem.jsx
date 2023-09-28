import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import productLink from '../services/productLink';

function AddItem() {
    // const  labels =product_name: DataTypes.STRING,
    // description: DataTypes.TEXT,
    // category: DataTypes.STRING,
    // price: DataTypes.FLOAT,
    // image: DataTypes.STRING,
    // quantity_available: DataTypes.INTEGER,
    // manufacturer: DataTypes.STRING
    // const formValues = {
    //     productName: '',
    //     description: '',
    //     category: '',
    //     price: '',
    //     quantityAvailable: '',
    //     manufacturer: '',
    //     image: '', // For file input, initialize to null
    //   };

    const [inputs, setInput]= useState({
        product_name: '',
        description: '',
        category: '',
        price: '',
        quantity_available: '',
        manufacturer: '',
        image: '', // For file input, initialize to null
      })
    return (  <div>
        <div><h2 className='fw-bold'>Product Entry Point</h2></div>
        <div className="d-flex justify-content-center align-items-center " >
         <Form className="p-4" style={{ minWidth: '600px' }}>
      <Form.Group className='mt-3 mb-3 '>
        <Form.Label className='fw-bold fs-5' >Product Name</Form.Label>
        <Form.Control type="text" style={{ height: '60px' }}
            value={inputs.product_name}
            required
            onChange={(e) => {

                setInput({ ...inputs, product_name: e.target.value })

            }}


        className='p-2' placeholder="Enter product name" />
      </Form.Group>

      <Form.Group className='mt-3 mb-3 ' controlId="description">
        <Form.Label className='fw-bold fs-5' >Description</Form.Label>
        <Form.Control as="textarea" className='p-2' rows={3}
         value={inputs.description}
         required
         onChange={(e) => setInput({ ...inputs, description: e.target.value })}
        placeholder="Enter description" />
      </Form.Group>

      <Form.Group className='mt-3 mb-3 ' controlId="category">
        <Form.Label className='fw-bold fs-5' >Category</Form.Label>
        <Form.Control type="text" className='p-2' style={{ height: '60px' }}
         value={inputs.category}
         Required
         onChange={(e) => setInput({ ...inputs, category: e.target.value })}
        placeholder="Enter category" />
      </Form.Group>

      <Form.Group className='mt-3 mb-3 ' controlId="price">
        <Form.Label className='fw-bold fs-5' >Price</Form.Label>
        <Form.Control type="number" className='p-2' style={{ height: '60px' }}
         value={inputs.price}
         required
         onChange={(e) => setInput({ ...inputs, price: e.target.value })}
        placeholder="Enter price" />
      </Form.Group>

      <Form.Group className='mt-3 mb-3 ' controlId="quantityAvailable">
        <Form.Label className='fw-bold fs-5' >Quantity Available</Form.Label>
        <Form.Control type="number" style={{ height: '60px' }} className='p-2'
         value={inputs.quantity_available}
         required
         onChange={(e) => setInput({ ...inputs, quantity_available: e.target.value })}
        placeholder="Enter quantity available" />
      </Form.Group>

      <Form.Group className='mt-3 mb-3 ' controlId="manufacturer">
        <Form.Label className='fw-bold fs-5' >Manufacturer</Form.Label>
        <Form.Control type="text" style={{ height: '60px' }}
         value={inputs.manufacturer}
         onChange={(e) => setInput({ ...inputs, manufacturer: e.target.value })}
         required
        className='p-2' placeholder="Enter manufacturer" />
      </Form.Group>

      <Form.Group className='mt-3 mb-3 ' controlId="image">
        <Form.Label className='fw-bold fs-5' >Image</Form.Label>
        <Form.Control type="text" style={{ height: '60px' }}
         value={inputs.image}
         required
         onChange={(e) => setInput({ ...inputs, image: e.target.value })}
        className='p-2' placeholder='Enter Image Link'  />
      </Form.Group>

      <Button variant="primary" onClick={async(e)=>{
         e.preventDefault();
         try {
            await productLink.entry(inputs)
         } catch (error) {
            console.log("Error in Data Entry")
         }
   }}>
        Submit
      </Button>
    </Form></div>
    </div>);
}

export default AddItem;
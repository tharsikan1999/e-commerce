import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-regular-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';

function AddProduct() {

  const [inputs,setInputs] = useState({
    productName : "",
    productPrice : "",
    AddDate : "",
    productQuantity : "",
    ProductImage : ""

  });

const getValues = (e) => {
  const name = e.target.name;
  const value = e.target.value

  setInputs((val)=>{
    return{...val,[name]:value}
  })

}

const sumbitValues = (e) => {
  e.preventDefault();
  console.log(inputs)
}



  return (
    <div className='mainbox-addproduct' id='mainbox-addproduct'>
        <form action="" className='form-addProduct' id='formaddProduct' onSubmit={sumbitValues}>
        <FontAwesomeIcon id='faclose' icon={faClose}/>
        <label htmlFor="product-name" id='l'>product name <span id='addproduct-span-1'>:</span> </label>
        <input type="text" placeholder='Enter product name' id='productName' onChange={getValues} value={inputs.productName}  name='productName'/><br />
        <label htmlFor="product-price">product price <span id='addproduct-span-2'> : </span> </label>
        <input type="number" placeholder='Enter product price' id='productPrice'onChange={getValues} value={inputs.productPrice} name='productPrice'/><br />
        <label htmlFor="Add-Date" id='lAddDate'>Add Date <span id='addproduct-span-3' >:</span>  </label>
        <input type="date" id='AddDate' name='AddDate'onChange={getValues} value={inputs.AddDate} /><br />
        <label htmlFor="product-quantity">product quantity <span id='addproduct-span-4'> :</span> </label>
        <input type="number" placeholder='Enter product quantity' id='productQuantity' onChange={getValues} value={inputs.productQuantity} name='productQuantity' /><br />
        <label htmlFor="Product-Image">Product Image <span id='addproduct-span-5'>:</span> </label>
        <input type="file" accept='image/jpeg,image/png' name='ProductImage' onChange={getValues} value={inputs.ProductImage} id='ProductImage'/><br /> 
        <button type='submit' id='Submit'>Submit</button>
        </form>

    </div>
  )
}

export default AddProduct



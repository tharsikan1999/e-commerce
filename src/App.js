import './App.css';
import Admin from './Adminpanel/Admin';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import sendData from './SendData';
import AppUser from './Userpanel/AppUser';



function App() {

  const [fullInputs,setFullinputs] = useState([]);

  const[imglinks,setImglinks] = useState([]);

  const [imageURL, setImageURL] = useState([]);

  const [inputs,setInputs] = useState({
    
    ProductNo : "",
    productName : "",
    productPrice : "",
    AddDate : "",
    productQuantity : "",
    
  
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

  

  setFullinputs([...fullInputs,inputs])

  setInputs(
    {
    
      ProductNo : "",
      productName : "",
      productPrice : "",
      AddDate : "",
      productQuantity : "",
      
    
    }
  )

  setImageURL("")

  setImglinks([...imglinks,imageURL])

  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageURL(imageUrl)
    }
    else{
      setImageURL(null)
    }

    
    
    
  };



  

  
  
  return (
    <div>
       <div className='mainbox-addproduct' id='mainbox-addproduct'>
        <form action="" className='form-addProduct' id='formaddProduct' onSubmit={sumbitValues}>
        <FontAwesomeIcon id='faclose' icon={faClose}/>
        <label htmlFor="ProductNo">Product No <span id='addproduct-span-0'> : </span> </label>
        <input type="number" placeholder='Enter product number' id='ProductNo' required onChange={getValues} value={inputs.ProductNo} name='ProductNo'/><br />
        <label htmlFor="product-name" id='l'>Product Name  <span id='addproduct-span-1'>:</span> </label>
        <input required type="text" placeholder='Enter product name' id='productName' onChange={getValues} value={inputs.productName}  name='productName'/><br />
        <label htmlFor="product-price">Product Price <span id='addproduct-span-2'> : </span> </label>
        <input required type="number" placeholder='Enter product price' id='productPrice'onChange={getValues} value={inputs.productPrice} name='productPrice'/><br />
        <label htmlFor="Add-Date" id='lAddDate'>Add Date <span id='addproduct-span-3' >:</span>  </label>
        <input required type="date" id='AddDate' name='AddDate'onChange={getValues} value={inputs.AddDate} /><br />
        <label htmlFor="product-quantity">Product Quantity <span id='addproduct-span-4'> :</span> </label>
        <input required type="number" placeholder='Enter product quantity' id='productQuantity' onChange={getValues} value={inputs.productQuantity} name='productQuantity' /><br />
        <label htmlFor="Product-Image">Product Image <span id='addproduct-span-5'>:</span> </label>
        <input required type="file" accept='image/jpeg,image/png' name='ProductImage' onChange={handleImageUpload} value={imageURL.ProductImage} id='ProductImage'/><br /> 
        <button type='submit' id='Submit'>Submit</button>
        
        </form>

    </div>
    <sendData.Provider value={{fullInputs,imglinks}}>
    <AppUser/>
    {/* <Admin/>  */}
    </sendData.Provider>
    
    </div>
  );
}

export default App;

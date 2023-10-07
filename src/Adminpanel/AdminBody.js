import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash,faEye } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import sendData from '../SendData'
import { useContext } from 'react'
import { useEffect } from 'react'

function AdminBody() {

    const inputData = useContext(sendData);



    

    const [data , setData] = useState([
        
    ])

    useEffect (()=>{
        setData(inputData)

    },[inputData])


    const deleteRowTabel = (idDeleterow) => {

         const updatedata = data.filter((item,index)=>{ return index !== idDeleterow
        })

        setData(updatedata)

        

        

    }


   

  return (
    <div className='adminBody' id='adminBody'>
        <table id='admintabel'>
            
           <thead>
           <tr>
                <th>Product no</th>
                <th>Product name</th>
                <th>Product Price</th>
                <th>Add date</th>
                <th>Product quantity</th>
                <th>Product image</th>
            </tr>
           </thead>
            <tbody>
            {data.map((row,index) => (
            <tr key={index}>
              <td>{row.ProductNo}</td>
              <td>{row.productName}</td>
              <td>{row.productPrice}</td>
              <td>{row.productQuantity}</td>
              <td>{row.AddDate}</td>
              <td id='tabeleye'><FontAwesomeIcon icon={faEye}/></td>
              <td id='tableEdit'><FontAwesomeIcon icon={faEdit}/></td>
              <td id='tabletrash'><FontAwesomeIcon icon={faTrash} onClick={()=>{deleteRowTabel(index)}}/></td>
            </tr>
            
          ))}
            
            
            </tbody>
            
        </table>

    </div>
  )
}

export default AdminBody
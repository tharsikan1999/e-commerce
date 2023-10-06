import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash,faEye } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function AdminBody() {

    const [data , setData] = useState([
        {
            id : 1,
            productName : "Shirt",
            productPrice : "100",
            AddDate : "2023-10-19",
            productQuantity : "24",
              
        },
        {
            id : 2,
            productName : "Shirt",
            productPrice : "100",
            AddDate : "2023-10-19",
            productQuantity : "24",
              
        },
        {
            id : 3,
            productName : "Shirt",
            productPrice : "100",
            AddDate : "2023-10-19",
            productQuantity : "24",
              
        },
        {
            id : 4,
            productName : "Shirt",
            productPrice : "100",
            AddDate : "2023-10-19",
            productQuantity : "24",
              
        },
        {
            id : 5,
            productName : "Shirt",
            productPrice : "100",
            AddDate : "2023-10-19",
            productQuantity : "24",
              
        },
    ])

    const deleteRowTabel = (idDeleterow) => {

         const updatedata = data.filter((item)=>{ return item.id !== idDeleterow
        })

        setData(updatedata); 

        

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
            {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.productName}</td>
              <td>{row.productPrice}</td>
              <td>{row.productQuantity}</td>
              <td>{row.AddDate}</td>
              <td id='tabeleye'><FontAwesomeIcon icon={faEye}/></td>
              <td id='tableEdit'><FontAwesomeIcon icon={faEdit}/></td>
              <td id='tabletrash'><FontAwesomeIcon icon={faTrash} onClick={()=>{deleteRowTabel(row.id)}}/></td>
            </tr>
          ))}
            {/* <tr id='tr'>
                <td>01</td>
                <td>shirt</td>
                <td>100</td>
                <td>2023-10-19</td>
                <td>24</td>
                <td id='tabeleye'><FontAwesomeIcon icon={faEye}/></td>
                <td id='tableEdit'><FontAwesomeIcon icon={faEdit}/></td>
                <td id='tabletrash'><FontAwesomeIcon icon={faTrash}/></td>
            </tr> */}
            
            </tbody>
            
        </table>

    </div>
  )
}

export default AdminBody
import React, { useEffect } from "react";
import logo from './Images/logo.svg'
import man from './Images/man.png'



export default function Navbar(){

    

    const showDropdwon = () => {
        let dropdownBox = document.getElementById('mainbox-dropdown');
        if(dropdownBox.style.display === "flex"){
            dropdownBox.style.display = "none"
        }
        else{
            dropdownBox.style.display = "flex"
        }
        
    }

    const showAddProduct = () => {
        let showProductBox = document.getElementById('mainbox-addproduct');
        
            showProductBox.style.display = "flex"

        let adminTable = document.getElementById('adminBody');

             adminTable.style.opacity = 0.4
        
        
    }

    const hideAddProduct = () => {
        
        let showProductBox = document.getElementById('mainbox-addproduct');
        showProductBox.style.display = "none"

        let adminTable = document.getElementById('adminBody');

             adminTable.style.opacity = 1.0

    }

    useEffect(()=>{
        const userLogo = document.getElementById('user-logo');
        userLogo.addEventListener("click",showDropdwon);

        const addProduct = document.getElementById('addItemButton');

        addProduct.addEventListener("click",showAddProduct);

        let closeButton = document.getElementById('faclose');
        
        closeButton.addEventListener('click',hideAddProduct);

        

        return ()=>{
            userLogo.removeEventListener("click",showDropdwon)
        }
    },[]);




    return(
        <div className="admin-navbar-MainBox">
            <div className="navbar-LeftBox" >
                <img className="logo" src={logo} alt="logo" />
                
            </div>
            <div className="admin-center-box">
                <button id="addItemButton">Add Item</button>
            </div>
            <div className="admin-Navbar-RightBox">
                <img className="user-logo" id="user-logo"  src={man} alt="user logo" />
            </div>

        </div>
    )
}




import React from "react";
import "./Admin.css"
import Navbar from "./Navbar";
import DropDownBox from "./dropDownBox";
import AddProduct from "./AddProduct";
import AdminBody from "./AdminBody";



export default function Admin(){
    return(
        <div className="admin-Main-Bbox">
            <Navbar/>
            <DropDownBox/>
            <AdminBody/>
            <AddProduct/>
        </div>
    )
}


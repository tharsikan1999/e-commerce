import React from "react";
import "./Admin.css"
import Navbar from "./Navbar";
import DropDownBox from "./dropDownBox";
import AdminBody from "./AdminBody";




export default function Admin(){
    return(
        <div className="admin-Main-Bbox">
            <Navbar/>
            <DropDownBox/>
            <AdminBody/>
        </div>
    )
}

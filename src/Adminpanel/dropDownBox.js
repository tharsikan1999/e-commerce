import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faSignOut,faServer} from '@fortawesome/free-solid-svg-icons'



export default function DropDownBox(){
    return(
        <div className="mainbox-dropdown" id="mainbox-dropdown">
            <div className="dropdownbox-box1">
            <FontAwesomeIcon icon={faUser} />
            <div className="DropDownBox-Profile"><p>Profile</p></div>
            </div>
            <div className="dropdownbox-box2">
            <FontAwesomeIcon icon={faServer} />
            <div className="DropDownBox-Admin-Panel"><p>Panel</p></div>
            </div>
            <div className="dropdownbox-box3">
            <FontAwesomeIcon icon={faSignOut} />
            <div className="DropDownBox-Logout"><p>Logout</p></div>
            </div>
            
            
        </div>
    )
}
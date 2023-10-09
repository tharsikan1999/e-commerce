import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faSignOut,faServer} from '@fortawesome/free-solid-svg-icons'
import './User.css'

import { Link } from 'react-router-dom';


function DropDownuser() {
  return (
    <div className="umainbox-dropdown" id="umainbox-dropdown">
            <div className="udropdownbox-box1">
            <FontAwesomeIcon icon={faUser} />
            <div className="uDropDownBox-Profile"><p>Profile</p></div>
            </div>
            <Link id='Link-udropdownbox-box2' to='../Adminpanel/Admin'>
            <div className="udropdownbox-box2">
            <FontAwesomeIcon icon={faServer} />
            <div className="uDropDownBox-Admin-Panel"><p>Panel</p></div>
            </div>
            </Link>
            <Link id='Link-udropdownbox-box3' to='/'>
            <div className="udropdownbox-box3">
            <FontAwesomeIcon icon={faSignOut} />
            <div className="uDropDownBox-Logout"><p>Logout</p></div>
            </div>
            </Link>
            
            
            
        </div>
  )
}

export default DropDownuser
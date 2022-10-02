import React from 'react';
import './AccountIcon.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
/*import NoAccountsIcon from '@mui/icons-material/NoAccounts'; */




function AccountIcon() {
  return (
    <div className="account">
        
      <div className="accountIcon">
        <AccountCircleIcon id="accountIcon" />
      </div>

      {

      <div className="account__options">
        <ul>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </div> 
      
      }   
    </div>
  )
}

export default AccountIcon
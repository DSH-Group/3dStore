import React, { useState } from 'react';
import './AccountIcon.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
/*import NoAccountsIcon from '@mui/icons-material/NoAccounts'; */


function AccountIcon() {
  const [buttonState, setButtonState] = useState();
  
  
  return (
    <div className="account">
        
      <div className="accountIcon">
        <AccountCircleIcon 
          id="accountIcon" 
          onClick = {() => setButtonState(!buttonState)} 
        />
      </div>

      { buttonState === true &&(
      <div className="account__options">
        <ul> 
          <li onClick={() => setButtonState(!buttonState)}><a href="www.google.com" target="_blank">Profile</a></li>
          <li onClick={() => setButtonState(!buttonState)}><a href="www.google.com" target="_blank">Login</a></li>
          <li onClick={() => setButtonState(!buttonState)}><a href="www.google.com" target="_blank">Logout</a></li>
        </ul>
      </div> 
      )}
    
    </div>
  )
}

export default AccountIcon
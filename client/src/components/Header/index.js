import React from 'react';
import Sign_in_button from '../../components/Sign_in_button'
import Sign_up_button from '../../components/Sign_up_button'
import Logout_button from '../../components/Logout_button'
import './style.css';



const Header = () => {
 
let token = localStorage.getItem('token');

 return (
   
  <div className= "Header">
<h1 className= "Title"><a href="/">Arkeos</a></h1>
<div className= "Buttons">

<>
      {token
        ? <Logout_button />
        : <><Sign_in_button /> <Sign_up_button /></>
          
      }
  
  </>
   

</div>
  </div>
)
    }

export default Header

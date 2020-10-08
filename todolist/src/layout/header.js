import React from 'react';
import '../layout.css';
function Header (props) { 
    return (
    <header>
     {props.title}
    </header>
  
    );

}
export default Header;
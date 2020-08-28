import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
           <div className="heading">
                 <h1>Online Education Website</h1> 
           </div>
           <div className="navigation">
               <nav>
                   <a className="marked" href="/course">Course</a>
                   <a href="/account">Account</a>
                   <a href="/inbox">Inbox</a>
               </nav>
           </div>


        </div>
    );
};

export default Header;
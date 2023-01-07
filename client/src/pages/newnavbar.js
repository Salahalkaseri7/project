import React from 'react'
import "../css/newnavbarstyle.css"
import { Link } from 'react-router-dom';


const newnavbar = () => {
    return (
        
        <div>
            
            <header id="nav-wrapper">
                
                
                <nav id="nav">
                    <div class="nav left">
                        <span class="gradient skew"><h1 class="logo un-skew"><a href="#home"></a></h1></span>
                        <button id="menu" class="btn-nav"><span class="fas fa-bars"></span></button>
                    </div>
                    <div class="nav right">

                        <Link to="/" class="nav-link"><span class="nav-link-span"><span class="u-nav">Home</span></span></Link>
                        
                        <Link to="/about" class="nav-link"><span class="nav-link-span"><span class="u-nav">About Us</span></span></Link>
                        <Link to="/admin" class="nav-link"><span class="nav-link-span"><span class="u-nav">Admin</span></span></Link>
                        
                        
                    </div>
                </nav>
                
            </header>
            <br/>
            <br/>
            <br/>
            <br/>
            

            
        </div>
    )
}

export default newnavbar
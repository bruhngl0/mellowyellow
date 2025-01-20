import React from 'react';
import "../styles/header.scss"

const Header = () => {
  return (
    <header className='header'>
        <nav className='header-nav'>
            <a href="/">Home</a>
            <a href="/screensix">Products</a>
            <a href="/bespoke">BeSpoke</a>
            <a href="/enquiry">Enquiry</a>
            
        </nav>
    </header>
  );
}

export default Header;
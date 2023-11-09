import React from 'react';
import { Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
             <Nav class="navbar bg-dark ">
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">
      Foodhub <i class="fa-solid fa-utensils"></i>
    </a>
  </div>
</Nav>
        </div>
    );
}

export default Header;

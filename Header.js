import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
   

<nav className='header'>
    <Link to="/">
    <img className='header_logo' src='./logo.png' alt='LOGO'/>
    </Link>


<div className='header_search'>
<input type="text" placeholder="Enter to search..." className='header_searchInput'/>
<SearchIcon className='header_searchIcon'/>
</div>

<div className='header_nav'>
    <div className='header_option'>
    <span className='topline'>Namaste 🙏</span>
    <span className='bottomline'>Srivatsa{}</span>
    
    </div>
   

    <Link to="/login" className='header_link'>
    <div className='header_option'>
   <AccountCircleIcon />
   <span className='bottomline'>Sign In</span>
    </div>
    </Link>

    <Link to="/checkout" className='header_link'>
    <div className='header_option'>
        <ShoppingCartIcon />
        <span className='bottomline'>Cart</span>
    </div>
    </Link>
</div>

</nav>  
   
    )
}

export default Header
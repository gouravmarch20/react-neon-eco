import React from 'react'
import Annoncement from '../../components/specefic/Annoncement/Annoncement'
import './Navbar.css'
// import { Search, ShoppingCartOutlined } from '@material-ui/icons'
// import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      {/* To do hide if not home page  */}
      <Annoncement />
      <div className='navbar'>
        <div className='navbar-warpper'>
          <div className='navbar-left'>
            <Link to='/home' className='navbar-link'>
              <h1>neo rail </h1>
            </Link>
          </div>
          <div className='navbar-center'>
            <div className='navbar-search'>
              <input className='navbar-search-input' type='text' />
              {/* <SearchIcon></SearchIcon> */}
            </div>
          </div>
          <div className='navbar-right'>
            {/* TODO: toggle signin / signup, badge icon => CART , WISHLIST */}
            {/* <Link to='/' className='navbar-link'>
              Login
            </Link>
            <Link to='/' className='navbar-link'>
              Signout
            </Link> */}
            <Link to='/products' className='navbar-link'>
             product
            </Link>
            <Link to='/cart' className='navbar-link'>
              Cart
            </Link>
            <Link to='/wishlist' className='navbar-link'>
              WishList{' '}
            </Link>
            <Link to='my-profile' className='navbar-link'>
              My profile
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

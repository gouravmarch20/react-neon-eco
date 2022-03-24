import React from 'react'
import Annoncement from '../../components/specefic/Annoncement/Annoncement'
import './Navbar.css'
// import { Search, ShoppingCartOutlined } from '@material-ui/icons'
// import SearchIcon from '@mui/icons-material/Search'

const Navbar = () => {
  return (
    <>
      {/* To do hide if not home page  */}
      <Annoncement />
      <div class='navbar'>
        <div className='navbar-warpper'>
          <div className='navbar-left'>
            <h1>neo rail </h1>
          </div>
          <div className='navbar-center'>
            <div className='navbar-search'>
              <input className='navbar-search-input' type='text' />
              {/* <SearchIcon></SearchIcon> */}
            </div>
          </div>
          <div className='navbar-right'>
            {/* TODO: toggle signin / signup, badge icon => CART , WISHLIST */}
            <div className='navbar-link'>Login</div>
            <div className='navbar-link'>Signout</div>
            <div className='navbar-link'>Cart</div>
            <div className='navbar-link'>WishList </div>
            <div className='navbar-link'>My profile </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

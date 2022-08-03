import React, { useEffect, useState } from 'react'
import Annoncement from '../../components/specefic/Annoncement/Annoncement'
import './Navbar.css'
import { useTheme } from '../../context/ThemeContext'
import AppTheme from '../../color/ColorsThree'
import { useAuth } from '../../context/AuthContext'

import { Link, useLocation } from 'react-router-dom'
import { MdDarkMode, MdOutlineFlashlightOn } from 'react-icons/md'
import { TiHeartFullOutline, TiShoppingCart, TiUser } from 'react-icons/ti'
// context
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'

const Navbar = () => {
  let location = useLocation()

  const [currentTab, setCurrentTab] = useState('')
  useEffect(() => {
    setCurrentTab(location.pathname)
  }, [location])

  const {
    authState: { isLoggedIn },
    logoutHandler
  } = useAuth()
  const {
    cartState: { totalProductInCart }
  } = useCart()
  const {
    wishlistState: { totalProductInWishlist }
  } = useWishlist()

  const { themeState, themeDispatch } = useTheme()
  const currectTheme = AppTheme[themeState.themeMode]

  return (
    <>
      {currentTab === ('/home' || '/') ? <Annoncement /> : null}
      <div
        className='navbar'
        style={{
          position: 'sticky',
          top: '0px',
          zIndex: 100,
          backgroundColor: `${currectTheme.backgroundColor}`,
          color: `${currectTheme.textColor}`
        }}
      >
        <div className='navbar-warpper'>
          <div className='navbar-left'>
            <Link to='/home' className='navbar-link'>
              <h2
                className='navbar-header'
                style={{
                  color: '#5DA3FA'
                }}
              >
                {' '}
                Stationery Hut{' '}
              </h2>
            </Link>
            
          </div>
          <div className='navbar-center'>
            <Link
              to='/products'
              className='navbar-link 
              '
            >
              <button className='btn bg-pink btn-lg btn-danger'>
                Shop Now
              </button>
            </Link>
          </div>
          <div className='navbar-right'>
            <Link
              to='/cart'
              className='navbar-link navbar-link-icon
'
            >
              <div className='relative'>
                <span className='badge-counter-red'>{totalProductInCart}</span>
                <TiShoppingCart />
              </div>
            </Link>

            <Link
              to='/wishlist'
              className='navbar-link navbar-link-icon
'
            >
              <div className='relative'>
                <p className='badge-counter-green'>{totalProductInWishlist}</p>
                <TiHeartFullOutline />{' '}
              </div>
            </Link>
            <Link
              to='my-profile'
              className='navbar-link navbar-link-icon
'
            >
              <TiUser />
            </Link>
            <Link
              to='#'
              className='navbar-link navbar-link-icon
'
            >
              <span>
                {' '}
                {themeState.themeMode == 'light' ? (
                  <div
                    className='nav-theme-link'
                    onClick={() =>
                      themeDispatch({
                        type: 'LIGHT_MODE',
                        payload: 'dark'
                      })
                    }
                  >
                    <MdDarkMode />
                  </div>
                ) : (
                  <div
                    className='nav-theme-link'
                    onClick={() =>
                      themeDispatch({
                        type: 'LIGHT_MODE',
                        payload: 'light'
                      })
                    }
                  >
                    <MdOutlineFlashlightOn />
                  </div>
                )}
              </span>
            </Link>
            {!isLoggedIn && (
              <Link
                to='signin'
                className='navbar-link 
'
              >
                <button className='btn btn-danger-light'>SignIn</button>
              </Link>
            )}
            {isLoggedIn && (
              <Link
                to='my-profile'
                className='navbar-link 
'
              >
                <button className='btn-auth' onClick={logoutHandler}>
                  Signout
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

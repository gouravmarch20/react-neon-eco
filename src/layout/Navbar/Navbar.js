import React, { useContext } from 'react'
import Annoncement from '../../components/specefic/Annoncement/Annoncement'
import './Navbar.css'
import { useTheme } from '../../context/ThemeContext'
import AppTheme from '../../ColorsThree'

import { Link } from 'react-router-dom'

const Navbar = () => {
  const { themeState, themeDispatch } = useTheme()
  const currectTheme = AppTheme[themeState.themeMode]

  return (
    <>
      {/* To do hide if not home page  */}
      <Annoncement />
      <div
        className='navbar'
        style={{
          backgroundColor: `${currectTheme.backgroundColor}`,
          color: `${currectTheme.textColor}`
        }}
      >
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
            <Link to='#' className='navbar-link'>
              <span>
                {' '}
                {themeState.themeMode == 'light' ? (
                  <div
                    onClick={() =>
                      themeDispatch({
                        type: 'LIGHT_MODE',
                        payload: 'dark'
                      })
                    }
                  >
                    Dark
                  </div>
                ) : (
                  <div
                    onClick={() =>
                      themeDispatch({
                        type: 'LIGHT_MODE',
                        payload: 'light'
                      })
                    }
                  >
                    Light
                  </div>
                )}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

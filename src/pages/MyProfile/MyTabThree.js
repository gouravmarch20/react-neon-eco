import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'

export const MyTabThree = () => {
  let location = useLocation()
  const [currentLocation, setCurrentLocation] = useState('')
  useEffect(() => {
    setCurrentLocation(location.pathname)
    // return () => {
    //   currentLocation
    // }
  }, [location])
  return (
    <>
      {' '}
      <div className='myProfile-btn-container'>
        <Link to='/my-profile'>
          <button
            className={`btn   ${
              currentLocation === '/my-profile'
                ? 'btn-success'
                : 'btn-outline-success'
            }`}
          >
            Myprofile
          </button>
        </Link>
        <Link to='/my-address'>
          <button
            className={`btn   ${
              currentLocation === '/my-address'
                ? 'btn-success'
                : 'btn-outline-success'
            }`}
          >
            Address
          </button>
        </Link>
        <Link to='/my-order'>
          <button
            className={`btn   ${
              currentLocation === '/my-order'
                ? 'btn-success'
                : 'btn-outline-success'
            }`}
          >
            Order
          </button>
        </Link>
      </div>
    </>
  )
}

import React from 'react'
import { useWishlist } from '../../context/WishlistContext'

const Header = () => {
  const { wishlistState : {wishlist} } = useWishlist()

  return (
    <>
      {' '}
      <h2 className='heading mt-1'>
        Your saved <span> {wishlist.length} products . </span>
      </h2>
    </>
  )
}

export default Header

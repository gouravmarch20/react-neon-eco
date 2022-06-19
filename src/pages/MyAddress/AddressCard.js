import React, { useState } from 'react'
import { useUser } from '../../context/UserContext'
import { deleteAddress } from '../../helpers/'
import { EditAddressModal } from './EditAddressModal'
export const AddressCard = ({ defaultAddress }) => {
  const [toggleEditAddressModal, setToggleEditAddressModal] = useState(false)
  const {
    userState: { address },
    userDispatch
  } = useUser()
  return (
    <div>
      {address.length !== 0 ? (
        <>
          <h2 className='subheading'>Your Address</h2>
          {address.map(userAddress => {
            const {
              name,
              zipCode,
              street,
              state,
              mobileNo,
              country,
              city,
              _id
            } = userAddress

            const isDefaultAddress = _id == defaultAddress._id

            return (
              <div
                key={_id}
                className={`${
                  isDefaultAddress ? 'bg-light  address-card' : 'address-card'
                }`}
              >
                <p>{name}</p>
                <p>{zipCode}</p>
                <p>{city}</p>
                <p>{state}</p>
                <p>{mobileNo}</p>
                <p>{country}</p>
                <p>{street}</p>
                {isDefaultAddress && (
                  <mark className='default-address'> Default address</mark>
                )}
                <button
                  className='btn btn-outline-blue btn-sm'
                  onClick={() => {
                    deleteAddress(_id, address, userDispatch)
                  }}
                >
                  delete
                </button>
                <button
                  onClick={() => setToggleEditAddressModal(true)}
                  className='btn btn-outline-blue btn-sm'
                >
                  edit
                </button>
                {!isDefaultAddress && (
                  <button
                    className='btn btn-outline-blue btn-sm'
                    onClick={() =>
                      userDispatch({
                        type: 'DEFAULT_ADDRESS',
                        payload: userAddress
                      })
                    }
                  >
                    Make Default
                  </button>
                )}

                {toggleEditAddressModal && (
                  <EditAddressModal
                    onClose={() => {
                      setToggleEditAddressModal(false)
                    }}
                    editAddressData={userAddress}
                    editAddressId={_id}
                    isEditAddressModal
                  />
                )}
              </div>
            )
          })}{' '}
        </>
      ) : (
        <h2 className='subheading'>Please add address </h2>
      )}
    </div>
  )
}

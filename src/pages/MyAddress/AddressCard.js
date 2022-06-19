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
      AddressCard
      {address.length !== 0 ? (
        address.map(userAddress => {
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
            <div key={_id} className={`${isDefaultAddress ? 'bg-light ' : ''}`}>
              <p>{name}</p>
              <p>{zipCode}</p>
              <p>{city}</p>
              <p>{state}</p>
              <p>{mobileNo}</p>
              <p>{country}</p>
              <p>{street}</p>
              {isDefaultAddress && <mark> Default address</mark>}
              <button
                onClick={() => {
                  deleteAddress(_id, address, userDispatch)
                }}
              >
                delete
              </button>
              <button onClick={() => setToggleEditAddressModal(true)}>
                edit
              </button>
              {!isDefaultAddress && (
                <button
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
        })
      ) : (
        <h2>No address added</h2>
      )}
    </div>
  )
}

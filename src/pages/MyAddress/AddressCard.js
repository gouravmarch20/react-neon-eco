import React, { useState } from 'react'
import { useUser } from '../../context/UserContext'
import { deleteAddress } from '../../helpers/'
import { EditAddressModal } from './EditAddressModal'

export const AddressCard = () => {
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
          return (
            <div key={_id}>
              <p>{name}</p>
              <p>{zipCode}</p>
              <p>{city}</p>
              <p>{state}</p>
              <p>{mobileNo}</p>
              <p>{country}</p>
              <p>{street}</p>
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

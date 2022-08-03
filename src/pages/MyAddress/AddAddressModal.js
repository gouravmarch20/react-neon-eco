import React, { useState } from 'react'
import './myAddressModal.css'
import { RiCloseCircleFill } from 'react-icons/ri'
import { useUser } from '../../context/UserContext'
export const AddAddressModal = ({ onClose }) => {
  const {
    userState: { address },
    userDispatch
  } = useUser()
  const stateArr = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Delhi',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal'
  ]
  const formValue = {
    name: '',
    street: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    mobileNo: ''
  }
  const [addressForm, setAddressForm] = useState(formValue)
  const fillFormValue = (event, fieldName) => {
    const { value } = event.target
    setAddressForm(prev => ({ ...prev, [fieldName]: value }))
  }

  const handleEditSave = () => {
    if (
      addressForm.city !== '' &&
      address.name !== '' &&
      address.street !== '' &&
      address.city !== '' &&
      address.state !== ''
    ) {
      userDispatch({ type: 'ADD_ADDRESS', payload: addressForm })
      onClose()
    }
  }
  const fillFormValueWithDummy = () => {
    setAddressForm(form => ({
      ...form,
      name: 'Gourav Mishra',
      street: '81/5 Arya line  ',
      city: 'Ranchi',
      state: 'Jharkhand',
      country: 'India',
      zipCode: '492331',
      mobileNo: '8949525253'
    }))
  }
  const resetFormValue = () => {
    setAddressForm(form => ({
      ...form,
      name: '',
      street: ' ',
      city: '',
      state: '',
      country: '',
      zipCode: '',
      mobileNo: ''
    }))
  }

  return (
    <main className='modal-container add-address-modal'>
      <div className='modal-main '>
        <h3>Close Me </h3>

        <button className='btn btn-danger p-10' onClick={onClose}>
          <i className='modal-close-icon'>
            <RiCloseCircleFill />
          </i>
        </button>
      </div>

      <form onSubmit={e => e.preventDefault()}>
        <input
          type='text'
          name=''
          id=''
          className='input-block'
          value={addressForm.name}
          placeholder='enter name'
          required
          onChange={e => fillFormValue(e, 'name')}
        />
        <input
          type='text'
          name=''
          className='input-block'
          id=' '
          placeholder='enter address  '
          value={addressForm.street}
          onChange={e => fillFormValue(e, 'street')}
          required
        />
        <input
          type='text'
          name=''
          id=' '
          className='input-block'
          placeholder='enter city  '
          value={addressForm.city}
          onChange={e => fillFormValue(e, 'city')}
          required
        />
        <input
          type='text'
          name=''
          id=' '
          className='input-block'
          placeholder='enter zipCode  '
          value={addressForm.zipCode}
          onChange={e => fillFormValue(e, 'zipCode')}
          required
        />
        {/* FIXME: DEFAULT_ADDRESS VALUE */}
        <select
          type='text'
          name=''
          id=' '
          placeholder='enter state  '
          className='input-block'
          value={addressForm.state}
          onChange={e => fillFormValue(e, 'state')}
          required
        >
          {stateArr.map((state, index) => {
            return <option key={index}> {state} </option>
          })}
        </select>
        <input
          type='number'
          name=''
          id=''
          className='input-block'
          placeholder='enter mobile number'
          value={addressForm.mobileNo}
          onChange={e => fillFormValue(e, 'mobileNo')}
          required
        />
        <button
          onClick={() => fillFormValueWithDummy()}
          className='btn  btn-outline-blue'
        >
          fill dummy
        </button>
        <button
          onClick={() => resetFormValue()}
          className='btn  btn-outline-blue'
        >
          Reset Form
        </button>
        <button
          // disabled={title === ''}
          className='btn btn-info'
          onClick={
            () => {
              handleEditSave(), resetFormValue()
            }

            // onClose()
            // setTitle('')
          }
        >
          Save Address
        </button>
      </form>
    </main>
  )
}

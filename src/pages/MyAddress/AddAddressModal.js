import React, { useState } from 'react'
import './myAddressModal.css'
import { RiCloseCircleFill } from 'react-icons/ri'
import { useUser } from '../../context/UserContext'
export const AddAddressModal = ({ onClose }) => {
  const {
    userState: { address },
    userDispatch
  } = useUser()
  const [title, setTitle] = useState('')
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
    userDispatch({ type: 'ADD_ADDRESS', payload: addressForm })
  }
  const fillFormValueWithDummy = () => {
    setAddressForm(form => ({
      ...form,
      name: 'Gourav',
      street: '81/5 Westside PatelNagar ',
      city: 'Kota',
      state: 'Rajasthan',
      country: 'India',
      zipCode: '110009',
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
    <main className='modal-container'>
      <div className='modal-main mb-10'>
        <p className='save-title '>Save to </p>
        <button className='btn btn-danger p-10' onClick={onClose}>
          <i className='modal-close-icon'>
            <RiCloseCircleFill />
          </i>
        </button>
      </div>

      <form onSubmit={e => e.preventDefault()}>
        <h2>Add Address</h2>
        <input
          type='text'
          name=''
          id=''
          value={addressForm.name}
          placeholder='enter name'
          required
          onChange={e => fillFormValue(e, 'name')}
        />
        <input
          type='text'
          name=''
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
          placeholder='enter city  '
          value={addressForm.city}
          onChange={e => fillFormValue(e, 'city')}
          required
        />
        <input
          type='text'
          name=''
          id=' '
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
          placeholder='enter mobile number'
          value={addressForm.mobileNo}
          onChange={e => fillFormValue(e, 'mobileNo')}
          required
        />
        <button onClick={() => fillFormValueWithDummy()}>fill dummy</button>
        <button onClick={() => resetFormValue()}>Reset Form</button>
        <button
          // disabled={title === ''}
          className='btn btn-info'
          onClick={
            handleEditSave
            // addPlayist(title, token, playlistDispatch)
            // onClose()
            // setTitle('')
          }
        >
          Save Address
        </button>
      </form>
      <div className='create-playlist'>
        <input
          className='input-item'
          type='text'
          placeholder='Enter playlist name...'
          onChange={e => setTitle(e.target.value)}
        />
        <button
          disabled={title === ''}
          className='btn btn-info'
          onClick={() => {
            onClose()
            setTitle('')
          }}
        >
          Add
        </button>
      </div>
    </main>
  )
}

import React from 'react'
import './Annoncement.css'
import { useTheme } from '../../../context/ThemeContext'
import AppTheme from '../../../ColorsTwo'

const Annoncement = () => {
  const {
    themeState: { themeMode },
    themeDispatch
  } = useTheme()
  const currectTheme = AppTheme[themeMode]


  return (
    <div>
      <p
        className='annoncement'
        style={{
          backgroundColor: `${currectTheme.backgroundColor}`,
          color: `${currectTheme.textColor}`
        }}
      >
        An add by - educationalRail{' '}
      </p>
    </div>
  )
}

export default Annoncement

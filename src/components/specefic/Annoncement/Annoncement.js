import React from 'react'
import './Annoncement.css'
import { useTheme } from '../../../context/ThemeContext'
import AppTheme from '../../../color/ColorsTwo'
import { Link } from 'react-router-dom'
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
        <span>
          {' '}
          <a
            // replace
            href='https://educationrail.com/'
            target='_blank'
            className='announcement-link'
            // rel="noopener noreferrer"
          >
            {' '}
            An add by - educationalRail{' '}
          </a>
        </span>
      </p>
    </div>
  )
}

export default Annoncement

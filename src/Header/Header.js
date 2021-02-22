import React from 'react'
import './Header.css'
import IconButton from '@material-ui/core/IconButton'
import PersonIcon from '@material-ui/icons/Person'

function Header() {
  return (
    <div className="header">
      <IconButton >
        <PersonIcon fontSize='large' className='header__icon' />
      </IconButton>

      <img  className='header__logo' src='https://images.all-free-download.com/images/graphiclarge/cupid_6822703.jpg' alt='' />


    </div>
  )
}

export default Header

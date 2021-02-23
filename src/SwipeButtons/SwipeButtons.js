import React from 'react'
import './SwipeButtons.css'
import IconButton from '@material-ui/core/IconButton'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'



function SwipeButtons() {
  return (
    <div className='swipeButtons'>
      <IconButton className=''>
        <ReplayIcon fontSize='large' />
      </IconButton>
      <IconButton className=''>
        <CloseIcon fontSize='large' />
      </IconButton>
      <IconButton className=''>
        <StarRateIcon fontSize='large' />
      </IconButton>
      <IconButton className=''>
        <FavoriteIcon fontSize='large' />
      </IconButton>
      <IconButton className=''>
        <FlashOnIcon fontSize='large' />
      </IconButton>


    </div>
  )
}


export default SwipeButtons

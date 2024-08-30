import React from 'react'
import './Header.css'
import left from '../Marriageimages/headleft.png'
import right from '../Marriageimages/headright.png'

const Header = () => {
  return (
    <div className='header'>
      <div className="container">
        <div className='left'>
          <img src={left} alt="" />
        </div>
        <h1>Chennai's top catering company</h1>
        <div className='right'>
        <img src={right} alt="" />

        </div>

      </div>
    </div>
  )
}

export default Header

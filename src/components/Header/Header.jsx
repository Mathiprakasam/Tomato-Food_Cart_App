import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-content'>
        <h2 className='header-heading-content'>If you’re hungry, you’re not happy. I can help with that.</h2>
        <p className='header-text-content'>From our cart to your plate, we bring you the finest food, hot and fresh, to satisfy your cravings instantly!</p>
        <a href='#explore-menu'><button className='view-more-btn'>View More</button></a>
      </div>
    </div>
  )
}

export default Header
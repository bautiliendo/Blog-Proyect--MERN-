// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from '../../assets/play.png'

export const Header = () => {
  return (
      <header className="header">
        <div >
        <img src={logo} width={40} height={40}/>
          <div className="play"></div>
        </div>
          <h1>My Blog</h1>
      </header>
  )
}

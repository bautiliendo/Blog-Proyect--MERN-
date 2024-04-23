// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='jumbo'>
      <h1>Bienvenidos</h1>
      <p>Blog desarrollado con el MERN stack</p>
      <Link to='/articles' className='button'>Ver los articles </Link> 
    </div>
  )
}

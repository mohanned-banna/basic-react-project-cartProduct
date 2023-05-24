import React from 'react'
import {  NavLink } from 'react-router-dom'
import { PATH } from '../router'

const Header = () => {
  return (
    <header>
        <ul>
            <li><NavLink to={PATH.HOME}>Home</NavLink></li>
            <li><NavLink to={PATH.CART}>Cart</NavLink></li>
        </ul>
    </header>
  )
}

export default Header
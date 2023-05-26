import React from 'react'
import { NavLink } from 'react-router-dom'
import { PATH } from '../router'
import "../index.css"
import { useProductContext } from '../contexts/productContext'
import i18n from "i18next";

const Header = () => {
  const { state } = useProductContext()

 const changeLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en"
    i18n.changeLanguage(newLang)
    localStorage.setItem('lang' , newLang)
 }
  return (
    <header>
      <ul>
        <li><NavLink to={PATH.HOME}>Home</NavLink></li>
        <li><NavLink to={PATH.CART}>Cart {state.count}</NavLink></li>
        <button onClick={() => changeLanguage()}>Change lang</button>
      </ul>
    </header>
  )
}

export default Header
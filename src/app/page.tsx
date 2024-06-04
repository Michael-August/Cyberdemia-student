"use client"
import React from 'react'
import { useLayoutContext } from '../../context/LayoutContext';

const Home = () => {
  const { dispatch } = useLayoutContext();
  dispatch({ type: "SET_NAVBAR", navbarType: "webNavbar" });
  dispatch({ type: "SET_SIDEBAR", sidebarType: "none" });


  return (
    <div>website will be here </div>
  )
}

export default Home
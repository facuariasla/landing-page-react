import React from 'react'
import { Brand, CTA, Navbar } from './components'
import { Footer, Blog, Features, WhatGPT3, Header, Possibility } from "./containers"
import "./App.css"

//https://www.youtube.com/watch?v=LMagNcngvcU

export const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

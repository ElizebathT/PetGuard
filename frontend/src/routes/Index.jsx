import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './admin'


function Index() {
  return (
    <BrowserRouter>
      <Admin/>
    </BrowserRouter>
  )
}

export default Index
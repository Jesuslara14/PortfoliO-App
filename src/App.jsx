import { useState } from 'react'
import {Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/navbar'
import page from './assets/page.json'
import Page from './components/page'

function App() {

  return (
    <>
      <NavBar 
        props = {page.nav}
      />
      <div className='content'>
        <div className="items border-4 border-b-0 border-gray-200 h-fit">
          <Routes>
          {page.content.routes.map(route => (
            <Route path={route.path} element={<Page pageContent={route.pageContent}/>}/>
          ))}
        </Routes>
        </div>
        <footer className={page.content.footer.classes}>
            <p>Made with PortfoliO</p>
            <p>jl1191316@gmail.com</p>
        </footer>
      </div>
    </>
  )
}

export default App

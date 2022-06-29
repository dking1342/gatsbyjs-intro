import React from 'react'
import Navbar from './Navbar'
import "../styles/global.css"

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Navbar />
      <main className="content">
        { children }
      </main>
      <footer>
        <p>Copyright &copy; 2022 Web Warrior</p>
      </footer>
    </div>
  )
}

export default Layout
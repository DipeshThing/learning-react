import React from 'react'
import { Outlet } from 'react-router';
import Navbar from './NavBar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-1 bg-slate-50'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout;
import React from 'react'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div>
        <div>This is Auth Heading</div>
        <Outlet />
        <div>This is a Footer</div>
    </div>
  )
}

export default AuthLayout
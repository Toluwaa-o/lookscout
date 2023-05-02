import React from 'react'
import { Outlet } from 'react-router'
import Logo from '../components/header/logo'

export default function mainAdmin() {
  return (
    <div>
        <header> <Logo /> </header>

        <main>
            <Outlet />
        </main>
    </div>
  )
}

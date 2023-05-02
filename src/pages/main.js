import Navbar from '../components/header/navbar'
import { Outlet } from "react-router"
import Logo from '../components/header/logo'

export default function Main() {
    return (
      <>
      <header>
        <Logo />
      </header>
  
      <main>
        <Navbar />
        <Outlet />
      </main>
      </>
    )
  }
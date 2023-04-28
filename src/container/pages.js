import Navbar from "../components/header/navbar"
import Logo from '../components/header/logo'
import { Outlet } from "react-router"

export default function pages() {
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

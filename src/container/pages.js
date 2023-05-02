import { Outlet } from "react-router"
import { useNavigate } from "react-router-dom"
import { useEffect } from 'react'

export default function Pages() {
  // const navigate = useNavigate()
  // useEffect(() => {
  //   navigate('/register')
  // }, [])

  return (
    <>
      <Outlet />
    </>
  )
}

import { Outlet, useNavigate } from "react-router"
import { useEffect } from 'react

export default function pages() {
  const navigate = useNavigate()
  
  useEffect(() => {
    navigate('register')
  }, [])
  
  return (
    <>
      <Outlet />
    </>
  )
}

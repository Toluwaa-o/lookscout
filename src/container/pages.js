import { Outlet, Navigate } from "react-router"

export default function pages() {
  return (
    <>
      <Outlet />
      <Navigate to='register' replace={true} />
    </>
  )
}

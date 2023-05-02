import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Pages from './pages'
import Account from '../pages/account'
import Personal from '../pages/personal'
import Billing from '../pages/billing'
import Done from '../pages/done'
import Admin from "../pages/admin";
import Main from '../pages/main'
import EditPage from '../pages/editPage'
import Users from '../pages/users'
import MainAdmin from '../pages/mainAdmin'
import Error from '../pages/error'

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Pages />} >
        <Route path='register' element={<Main />}>
          <Route index element={<Account />} />
          <Route path='personal' element={<Personal />} />
          <Route path='billing' element={<Billing />} />
          <Route path='done' element={<Done />} />
        </Route>
        <Route path='admin' element={<MainAdmin />}>
          <Route index element={<Admin />} />
          <Route path='edit-page' element={<EditPage />} />
          <Route path='users' element={<Users />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Route>
  )
)

export default function App() {
  return (
      <RouterProvider router={router} />
  )
}

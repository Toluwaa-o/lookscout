import { createHashRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Pages from './pages'
import Account from '../pages/account'
import Personal from '../pages/personal'
import Billing from '../pages/billing'
import Done from '../pages/done'

const router = createHashRouter(
  createRoutesFromElements(
      <Route path='/' element={<Pages />} >
          <Route index element={<Account />} />
          <Route path='/personal' element={<Personal />} />
          <Route path='/billing' element={<Billing />} />
          <Route path='/done' element={<Done />} />
      </Route>
  )
)

export default function App() {
  return (
      <RouterProvider router={router} />
  )
}
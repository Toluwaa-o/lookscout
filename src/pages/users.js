import { useState, useEffect } from 'react'
import instance from '../components/axios/config'
import { Link } from 'react-router-dom'

export default function Users() {
  const [users, setUsers] = useState(null)

  useEffect(() => {
    instance.get('/user')
    .then(res => setUsers(res.data.users))
  } , [])

  const myUsers = users && users.length > 0 ? users.map(user => {
    return (
      <div key={user._id}>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    )
  }) : <h3>There are no Users yet :/</h3>
  return (
    <div className='users'>
      <h2>Users</h2>
      <section>
        <Link to='/admin'>Go back</Link>
        <Link to='/register'>Register User</Link>
      </section>

      {users ? myUsers : <h3 className='loading'>Loading....</h3>}
    </div>
  )
}

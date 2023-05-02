import { Link } from 'react-router-dom'

export default function Admin() {
  return (
    <>
    <div className='admin'>
        <h2>Admin Panel</h2>

        <div className='controls'>
        <Link to='edit-page'>
            <p>Edit Page</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"></path></svg>
        </Link>

        <Link to='users'>
            <p>View All Users</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path></svg>
        </Link>
        </div>
    </div>
    </>
  )
}

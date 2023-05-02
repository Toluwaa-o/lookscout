import { Link } from 'react-router-dom'
import Logo from '../components/header/logo'

export default function Error() {
    return (
        <>
        <header> <Logo /> </header>
        <div className='error'>
            <h1>Oh Oh, we could not find that page :/</h1>
            <p>Go back to the <Link to='/register'>Register</Link> page or go to the <Link to='/admin'>Admin Panel</Link></p>
        </div>
        </>
    )
}
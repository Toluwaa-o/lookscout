import {useState} from 'react'
import { Navigate } from 'react-router'

export default function Personal() {
  const [valid, setValid] = useState(false)

  return (
    <>
    <form onSubmit={() => setValid(true)} className='personal'>
      <div>
        <label htmlFor='firstName'>First Name</label>
        <input type='text' name='firstName' id='firstName' placeholder='First Name' />
      </div>

      <div>
        <label htmlFor='lastName'>Last Name</label>
        <input type='text' name='lastName' id='lastName' placeholder='Last Name' />
      </div>

      <div>
        <label htmlFor='country'>Country</label>
        <input type='text' name='country' id='country' placeholder='Country' />
      </div>

      <div>
        <label htmlFor='city'>City</label>
        <input type='text' name='city' id='city' placeholder='City' />
      </div>

      <div>
        <label htmlFor='zipcode'>Zip Code</label>
        <input type='text' name='zipcode' id='zipcode' placeholder='Zip Code' />
      </div>

      <div>
        <button>
        Next
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'white'}}><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
        </button>
      </div>
    </form>
    {valid && <Navigate to='/billing' />}
    </>
  )
}

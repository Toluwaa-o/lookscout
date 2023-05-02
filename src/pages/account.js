import { useState, useEffect } from 'react'
import { Navigate } from 'react-router'
import instance from '../components/axios/config'

export default function Account() {
  const [ data, setData ] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
    accept: true,
    valid: false,
    button: ''
  })

  const [shouldSubmit, setShouldSubmit] = useState(false)

  const [ show, setShow ] = useState({
    msg1: null,
    msg2: false, 
    msg3: false, 
    msg4: false,
    msg5: false
  })

  const updateForm = (e) => {
    setShow({
      msg1: null,
      msg2: false, 
      msg3: false, 
      msg4: false,
      msg5: false
    })
    const { name, value } = e.target
    if(name === 'accept'){
      setData(prev => ({
        ...prev, accept: !prev.accept
      }))
    }else {setData(prev => ({
      ...prev, [name]: value
    }))
  }
  }

  const formSubmit = (e) => {
    e.preventDefault()

    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!data.name || !data.email || !data.password || !data.cpassword || !data.accept){
      if(!data.name){
        setShow(prev => ({...prev, msg5: true}))
      }
  
      if(!data.email.match(mailformat)){
        setShow(prev => ({...prev, msg2: true}))
      }
  
      if(!data.email){
        setShow(prev => ({...prev, msg2: true}))
      }
  
      if(!data.password || data.password === ''){
        setShow(prev => ({...prev, msg3: true}))
      }

      if(!data.cpassword){
        setShow(prev => ({...prev, msg4: true}))
      }

      return setShow(prev => ({ ...prev, msg1: 'Please, make sure all fields are filled'}))
    }

    if(data.password !== data.cpassword){
      return setShow(prev => ({...prev, msg1: 'Please make sure passwords match', msg4: true}))
    }

    setShouldSubmit(true)
  }

  useEffect(() => {
    instance.get('/info')
    .then(res => setData(prev => ({...prev, button: res.data.info.button})))
    .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if(shouldSubmit){
      const body = {name: data.name, email: data.email}
      instance({
        url: '/user', 
        method: 'post',
        data: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => setData(prev => ({...prev, valid: true})))
      .catch(err => setShow(prev => ({...prev, msg1: err.message})))
    }
  }, [shouldSubmit])

  return (
    <>
    <form onSubmit={formSubmit} className='account'>
      <div>
        <label htmlFor='name'>Name</label>
        <input onChange={updateForm} value={data.name} type='text' name='name' id='name' placeholder='Full Name' />
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{visibility: show.msg5 ? 'visible' : 'hidden'}}><path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z"></path><path d="M11 7h2v7h-2zm0 8h2v2h-2z"></path></svg>
      </div>

      <div>
        <label htmlFor='email'>Email*</label>
        <input onChange={updateForm} value={data.email} type='email' name='email' id='email' placeholder='Email Address' />
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{visibility: show.msg2 ? 'visible' : 'hidden'}}><path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z"></path><path d="M11 7h2v7h-2zm0 8h2v2h-2z"></path></svg>
      </div>

      <div>
        <label htmlFor='password'>Password*</label>
        <input onChange={updateForm} value={data.password} type='password' name='password' id='password' placeholder='Password' />
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{visibility: show.msg3 ? 'visible' : 'hidden'}}><path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z"></path><path d="M11 7h2v7h-2zm0 8h2v2h-2z"></path></svg>
      </div>

      <div>
        <label htmlFor='cpassword'>Confirm Password*</label>
        <input onChange={updateForm} value={data.cpassword} type='password' name='cpassword' id='cpassword' placeholder='Confirm Password' />
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{visibility: show.msg4 ? 'visible' : 'hidden'}}><path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z"></path><path d="M11 7h2v7h-2zm0 8h2v2h-2z"></path></svg>
      </div>
      

      <div className='terms'>
        <input onChange={updateForm} checked={data.accept} className='checkbox' type='checkbox' name='accept' id='accept' />
        <label htmlFor="accept">I accept the Terms and Privacy Policy</label>
      </div>

      <div>
        {show.msg1 && <p>{show.msg1}</p>}
      </div>

      <div>
      <button type='submit' disabled={!data.accept}>
        {data.button}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'white'}}><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
      </button>
      </div>
      
    </form>
    {data.valid && <Navigate to='/register/personal' />}
    </>
  )
}

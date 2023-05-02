import {useState, useEffect} from 'react'
import instance from '../components/axios/config'
import { Navigate } from 'react-router-dom'

export default function EditPage() {
    const [shouldSubmit, setShouldSubmit] = useState(false)
    const [completed, setCompleted] = useState(false)
    const [disableBtn, setDisableBtn] = useState(false)
    
    const [data, setData] = useState({
        button: '',
        lightMode: '',
        darkMode: '',
        err: ''
    })

    const [files, setFiles] = useState({
        lightMode: null,
        darkMode: null
    })

    const updater = (e) => {
        const { name, value } = e.target
        setData(prev => ({...prev, [name]: value}))
    }

    useEffect(() => {
        instance.get('/info')
        .then(res => setData(
            {button: res.data.info.button, lightMode: res.data.info.lightMode, darkMode: res.data.info.darkMode, err: ''}
        ))
        .catch(err => setData(prev => ({...prev, err: err.message})))
    }, [])

    useEffect(() => {
        if(files.lightMode){
            setDisableBtn(true)
            const formData = new FormData()

            if(files.lightMode) formData.append("image", files.lightMode)
            
            instance({
                url: '/upload',
                method: 'post',
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(res => setData(prev => ({...prev, lightMode: res.data.src})))
            .then(rus => setDisableBtn(false))
            .catch(err => setData(prev => ({...prev, err: err.message})))
        }
    }, [files.lightMode])

    useEffect(() => {
        if(files.darkMode){
            setDisableBtn(true)
            const formData = new FormData()

            if(files.darkMode) formData.append("image", files.darkMode)
            
            instance({
                url: '/upload',
                method: 'post',
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(res => setData(prev => ({...prev, darkMode: res.data.src})))
            .then(rus => setDisableBtn(false))
            .catch(err => setData(prev => ({...prev, err: err.message})))
        }
    }, [files.darkMode])

    const uploader = (e) => {
        const {name} = e.target
        setFiles(prev => ({...prev, [name]: e.target.files[0]}))
    }

    const submitter = (e) => {
        e.preventDefault()
        setShouldSubmit(prev => !prev)
    }

    useEffect(() => {
       if(shouldSubmit) {
        instance({
            url: '/update', 
            method: 'patch',
            data: {
                button: data.button, 
                lightMode: data.lightMode, 
                darkMode: data.darkMode
            },
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => console.log(res))
        .then(res => {
            setCompleted(true)
        })
        .catch(err => setData(prev => ({...prev, err: err.message})))
       }
    }, [shouldSubmit])

  return (
    <form className='edit' onSubmit={submitter}>
        <label htmlFor='button'>Button</label>
        <input onChange={updater} type='text' name='button' id='button' value={data.button} />

        <label htmlFor='lightMode'>Light Mode Image</label>
        <input onChange={uploader} type='file' name='lightMode' id='lightMode' />

        <label htmlFor='darkMode'>Dark Mode Image</label>
        <input onChange={uploader} type='file' name='darkMode' id='darkMode' />

        <button disabled={disableBtn} type='submit'>Edit</button>
        {completed && <Navigate to='/register' replace={true} />}
    </form>
  )
}

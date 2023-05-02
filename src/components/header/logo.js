import { useState, useEffect } from 'react'
import instance from '../axios/config'

export default function Labels(props) {
  const [darkMode, setDarkMode ] = useState(null)
  const [images, setImages] = useState({
    light: null,
    dark: null
  })

  useEffect(() => {
    if(localStorage.getItem('darkMode') === 'true'){
      setDarkMode(true)
    }else {
      setDarkMode(false)
    }
  }, [])

  useEffect(() => {
    instance.get('/info')
    .then(res => setImages({light: res.data.info.lightMode, dark: res.data.info.darkMode}))
    .catch(err => console.log(err))
  }, [])


  // --bodyBg: #FAFBFC;
  // --textColor: #272D37;
  // --mainBorder: #DAE0E6;
  // --navColor: #5F6D7E;
  // --active: #437EF7;
  // --formBg: #FFFFFF;
  // --red: red;
  // --gray: grey;

  useEffect(() => {
    let r = document.querySelector(':root')
    if(darkMode){
      r.style.setProperty('--bodyBg', ' #151B28')
      r.style.setProperty('--textColor', '#F9F9F9')
      r.style.setProperty('--mainBorder', '#252D3C')
      r.style.setProperty('--navColor', '#A5ACBA')
      r.style.setProperty('--active', '#437EF7')
      r.style.setProperty('--formBg', '#1C2534')
      r.style.setProperty('--navBg', '#252D3C')
      
    }else {
      r.style.setProperty('--bodyBg', ' #FAFBFC')
      r.style.setProperty('--textColor', '#272D37')
      r.style.setProperty('--mainBorder', '#DAE0E6')
      r.style.setProperty('--navColor', '#5F6D7E')
      r.style.setProperty('--active', '#437EF7')
      r.style.setProperty('--formBg', '#FFFFFF')
      r.style.setProperty('--navBg', '#FAFBFC')
      
    }
  }, [darkMode])

  useEffect(() => {
    if(typeof darkMode === 'boolean'){
      localStorage.setItem('darkMode', darkMode)
    }
  }, [darkMode])
  
  return (
    <>
    {images.light && <>
    <img crossorigin="anonymous" src={darkMode ? images.dark : images.light} alt='logo' />
    {darkMode ? <svg onClick={() => setDarkMode(prev => !prev)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path></svg>
    : <svg onClick={() => setDarkMode(prev => !prev)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" ><path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path></svg>}
    </>}
    </> 
  )
}

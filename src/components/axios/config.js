import axios from 'axios'

const instance = axios.create({
    baseURL: `https://lookscout-ig7v.onrender.com/api/v1`
})


export default instance
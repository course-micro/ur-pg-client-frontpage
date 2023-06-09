import axios from 'axios'
import errorHandler from '../axios/errorHandler'

const instance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
})

instance.interceptors.request.use(
    (response) => {
        response.data
    },
    errorHandler
)


export default instance
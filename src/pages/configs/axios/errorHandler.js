import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function errorHandler(error) {
  if (error){
    let message
    if (error.response) {
        if (error.response.status === 500) {
            message = 'Internal Server Error'
        } else {
            message = error.response.data.message
        }
        if(typeof message === 'string'){
            toast.error(message)

        return Promise.reject(error)
      }
    }
  }
}

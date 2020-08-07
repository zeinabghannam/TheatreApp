import axios from 'axios';

axios.interceptors.response.use(null, error => {
    const ExpectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

    if (!ExpectedError) {
        console.log('Logging Error ', error)
    }
    //Expected Error:
    return Promise.reject(error)
})

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delet: axios.delete
}
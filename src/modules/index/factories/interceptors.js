import axios from 'axios'

class Interceptors {
  init () {
    axios.interceptors.request.use((config) => {
      return config
    }, (error) => {
      return Promise.reject(error)
    })
    axios.interceptors.response.use(res => {
      location.href = 'login.html'
      return res
    }, (error) => {
      return Promise.reject(error)
    })
  }
}

export default new Interceptors()

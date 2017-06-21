import axios from 'axios'

class DataService {
  testGet () {
    return new Promise((resolve, reject) => {
      axios.get('http://api.map.baidu.com/telematics/v3/weather?location=%E4%B8%8A%E6%B5%B7&output=json&ak=HGOUnCXeQLEeywhGOu2jU29PFdC6duFF')
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
    })
  }
}

export default new DataService()

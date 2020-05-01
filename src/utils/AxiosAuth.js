import axios from 'axios'

const AxiosAuth = () => {
  const token = localStorage.getItem('token')

  const instance = axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  })

  return instance
}

export default AxiosAuth

import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY
const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key'

const getPictureOfTheDay = () => {
  return axios.get(`${baseUrl}=${API_KEY}`)
}

export default {
  getPictureOfTheDay,
}

import axios from 'axios'

const KEY = 'AIzaSyCS0eNL3W6jwznKLr5BZZ5hfNO0LSluR6Y'

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
})


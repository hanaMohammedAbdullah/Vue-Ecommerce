import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://openlibrary.org/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
let apiClientCover = axios.create({
  baseURL: 'https://covers.openlibrary.org/b/olid/',
  withCredentials: false,
  headers: {
    Accept: 'image/jpeg',
    'Content-Type': 'image/jpeg'
  }
})


export default {
  getBooksSubject(topic) {
    return apiClient
      .get(topic)
      .then(sleeper(7000))
  },
  getBook(id) {
    return apiClient.get('/work/' + id).then(sleeper(2000))
  },
  getAuthor(book,id) {
    return apiClient.get('/work/' + book+id).then(sleeper(2000))
  },
  getCover( id){
    return apiClientCover.get(id).then(sleeper(2000))
  }
}

function sleeper(ms) {
  return function(x) {
    return new Promise(resolve => setTimeout(() => resolve(x), ms))
  }
}

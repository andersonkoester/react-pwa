const params = {
  headers : {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json'
  }
};

//const URL = "http://localhost:3030/api";
const URL = "https://stormy-brook-79548.herokuapp.com/api";

function getNews(subject){
  return fetch(`${URL}/${subject}`, params)
    .then(response => response.json())
    .catch(err => {
      console.error("API ERR", err)
    });
}

function getNewsByID(subject, id){
  return fetch(`${URL}/${subject}/${id}`, params)
    .then(response => response.json())
    .catch(err => {
      console.error("API ERR", err)
    });
}

export default{
  getNews,
  getNewsByID
};
import axios from 'axios'


const baseUrl = "https://rickandmortyapi.com/api"

export const Axios = () =>{
   return axios.create({
    baseURL:"https://rickandmortyapi.com/api"
   })
}
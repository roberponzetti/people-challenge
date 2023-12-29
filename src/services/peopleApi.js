import axios from "axios";

export const peopleApi = axios.create({
  baseURL: 'https://swapi.dev/api/',
})
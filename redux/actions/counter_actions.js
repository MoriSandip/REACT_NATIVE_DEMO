import axios from 'axios';
// Define action types
export const GET_MOVIES = 'FETCH_MOVIES';
export const ADD_FAVORITE_ITEM = 'ADD_FAVORITE_ITEM';
export const REMOVE_FAVORITE_ITEM = 'REMOVE_FAVORITE_ITEM';
// Construct a BASE URL for API endpoint
const API_URL = 'https://api.themoviedb.org/3/movie/popular';
const API_KEY = 'bb925e230868e5ea561be5d9be231edb';
const PARAMS = 'page=1';
const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;

const increment_counter = () => {
    return {
      type: "increment"
    }
  }
const decrement_counter = () => {
    return {
      type: "decrement"
    }
  }
const multi_counter = () => {
    return {
      type: "multi"
    }
  }
const devide_counter = () => {
    return {
      type: "devide"
    }
  }
const getName = () => {
    return {
      type: "name"
    }
  }
const getFullName = () => {
    return {
      type: "fullname"
    }
  }
  const getSem = () => {
    return {
      type: "sem"
    }
  }
  const addTodo = ({text}) => {
    return {
      type: "toDo"
    }
  }
   
 const getMovies = () => {
    try {
      return async dispatch => {
        const res = await axios.get(`${BASE_URL}`);
        if (res.data) {
          dispatch({
            type: "GET_MOVIES",
            payload: res.data.results,
          });
        } else {
          console.log('Unable to fetch');
        }
      };
      // eslint-disable-next-line no-unreachable
    } catch (error) {
      // Add custom logic to handle errors
    }
  };
export {
    increment_counter,
    decrement_counter,
    multi_counter,
    devide_counter,
    getName,
    getFullName,
    addTodo,
    getMovies,
    getSem
};
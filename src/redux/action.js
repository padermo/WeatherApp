import axios from "axios";

export const GET_CITIES = 'GET_CITIES';
export const REMOVE_CITY = 'REMOVE_CITY';
export const GET_DETAIL = 'GET_DETAIL';

const apiKey = "f0c418b048f7b062dac946b2e6d10f61"

// esta funcion obtiene las ciudades
export const getCities = (ciudad) => {
  return async (dispatch) => {
    let data = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`);
    dispatch({ type: GET_CITIES, payload: data.data })
  }
}

// esta funcion elimina la card de cada city
export function removeCity(payload) {
  return {
    type: REMOVE_CITY,
    payload
  }
}

// esta funcion obtiene los detalles
export function getDetail(lat, lon) {
  return function (dispatch) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => dispatch({ type: GET_DETAIL, payload: data }))
  }
}
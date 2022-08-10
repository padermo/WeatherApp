export const GET_CITIES = 'GET_CITIES';
export const REMOVE_CITY = 'REMOVE_CITY';
export const GET_DETAIL = 'GET_DETAIL';

const apiKey = "f0c418b048f7b062dac946b2e6d10f61"

// esta funcion obtiene las ciudades
export function getCities(ciudad) {
  return function (dispatch) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => dispatch({ type: GET_CITIES, payload: data }))
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
export function getDetail(name) {
  return function (dispatch) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => dispatch({ type: GET_DETAIL, payload: data }))
  }
}
import { GET_CITIES, REMOVE_CITY, GET_DETAIL } from "./action";

const initialState = {
  ciudades: [],
  detalles: {}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CITIES:
      return {
        ...state,
        ciudades: [...state.ciudades, action.payload]
      }
    case REMOVE_CITY:
      return {
        ...state,
        ciudades: state.ciudades.filter((id)=> id.id !== action.payload)
      }
    case GET_DETAIL:
      return {
        ...state,
        detalles: action.payload
      }
    default:
      return state
  }
}
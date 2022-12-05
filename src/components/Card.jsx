import React from "react";
import { useDispatch } from "react-redux";
import { removeCity } from "../redux/action";
import "../stylesheets/Card.css";

function Card({ name, min, max, id, lon, lat }) {
  const dispatch = useDispatch();

  function onClick() {
    dispatch(removeCity(id))
  }
  console.log(`ciudad: ${name} long: ${lon} lat: ${lat}`);
  return (
    <div className="contenedor-card">
      <div className="contenedor-cabecera-card">
        <h1>{name}</h1>
      </div>

      <div className="contenedor-temp-card">
        <div className="contenedor-temps">
          <label htmlFor="min">Temp Min</label>
          <h3 id="min">{min}°</h3>
        </div>

        <div className="contenedor-temps">
          <label htmlFor="max">Temp Max</label>
          <h3 id="max">{max}°</h3>
        </div>
      </div>

      <div className="contenedor-btn-card">
        <button className="btn-card btn-remove-card" onClick={onClick}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Card;

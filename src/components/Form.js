import React, { useState } from "react";
import Uuid from "uuid/v4";
import PropTypes from 'prop-types'


const Form = ({ addCitas }) => {
  const [cita, handledCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  const [error, handledError] = useState(false);

  const setCita = event => {
    handledCita({
      ...cita,
      [event.target.name]: event.target.value
    });
  };

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const addCita = event => {
    event.preventDefault();

    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      handledError(true);
      return;
    }
    handledError(false);

    cita.id = Uuid();

    addCitas(cita);

    handledCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: ""
    });
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">
          <h3>Agregar cita</h3>
        </div>
      </div>
      <div className="card-body">
        {error ? (
          <p className="alert alert-danger">* Llena todos los campos</p>
        ) : null}
        <form onSubmit={addCita}>
          <div className="form-group">
            <label>Mascota</label>
            <input
              className="form-control"
              type="text"
              name="mascota"
              onChange={setCita}
              value={mascota}
            />
          </div>
          <div className="form-group">
            <label>Nombre del dueño</label>
            <input
              className="form-control"
              type="text"
              name="propietario"
              onChange={setCita}
              value={propietario}
            />
          </div>
          <div className="form-group">
            <label>Fecha</label>
            <input
              className="form-control"
              type="date"
              name="fecha"
              onChange={setCita}
              value={fecha}
            />
          </div>
          <div className="form-group">
            <label>Horario</label>
            <input
              className="form-control"
              type="time"
              name="hora"
              onChange={setCita}
              value={hora}
            />
          </div>
          <div className="form-group">
            <label>Sintomas</label>
            <textarea
              className="form-control"
              type="text"
              name="sintomas"
              onChange={setCita}
              value={sintomas}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Agregar
          </button>
        </form>
      </div>
    </div>
  );
};

Form.propTypes = {
    addCitas: PropTypes.func.isRequired
}

export default Form;

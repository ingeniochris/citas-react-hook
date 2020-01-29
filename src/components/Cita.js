import React from "react";

const Cita = ({ cita, deleteCita }) => {
  return (
    <div className="list-group ">
      <div className="list-group-item list-group-item-action flex-column align-items-start ">
        <div className="d-flex w-100 justify-content-between">
          <small>Horario : {cita.hora}</small>
          <small>{cita.fecha}</small>
        </div>
        <hr />
        <h5 className="mb-1">Mascota : {cita.mascota}</h5>
        <p className="mb-1">Sintomas : {cita.sintomas}</p>
        <small>Dueño : {cita.propietario}</small>
      </div>
      <button
        className="mb-1 btn btn-danger"
        onClick={() => deleteCita(cita.id)}
      >
        Eliminar &times;
      </button>
    </div>
  );
};

export default Cita;

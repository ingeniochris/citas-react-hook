import React, { Fragment, useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Cita from "./components/Cita";

function App() {
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }
  const [citas, handledCitas] = useState(citasIniciales);

  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]);

  const addCitas = cita => {
    handledCitas([...citas, cita]);
  };

  const deleteCita = id => {
    const newCitas = citas.filter(cita => cita.id !== id);
    handledCitas(newCitas);
  };

  const titulo =
    citas.length === 0 ? (
      <h3 className="alert alert-danger">No tienes citas</h3>
    ) : (
      <h3 className="alert alert-success">Administra tus citas</h3>
    );

  return (
    <Fragment>
      <Navbar />
      <div className="container pt-2">
        <div className="row">
          <div className="col-6">
            <Form addCitas={addCitas} />
          </div>
          <div className="col-6">
            {titulo}
            {citas.map(cita => (
              <Cita key={cita.id} cita={cita} deleteCita={deleteCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

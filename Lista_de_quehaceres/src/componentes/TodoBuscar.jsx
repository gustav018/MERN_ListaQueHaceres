import React from 'react';
function TodoBuscar({ inputBuscar, setInputBuscar }) {
  return (
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        Buscar
      </label>
      <input
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="Buscar Tarea"
        value={inputBuscar}
        onChange={(e) => setInputBuscar(e.target.value)}
      />
    </div>
  );
}

export { TodoBuscar };

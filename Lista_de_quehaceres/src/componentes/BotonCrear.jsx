function BotonCrear({ nuevaTarea, setNuevaTarea, agregarTarea }) {
  const handleChange = (event) => {
    setNuevaTarea(event.target.value);
  };

  return (
    <>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese nueva tarea"
          value={nuevaTarea}
          onChange={handleChange}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={agregarTarea}
      >
        Add
      </button>
    </>
  );
}

export { BotonCrear };

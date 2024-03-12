
import './TodoItem.css';

function TodoItem(props) {

  return (
    <>
      <li>
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <h5
                className={`card-title ${props.completado && 'tarea-completa'}`}
              >
                {props.tarea} {props.completado ? '' : ''}
              </h5>

              <div>
                <input className="form-check-input" onClick={props.onComplete} type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
              </div>
              <button
                type="button"
                className="btn btn-dark "
                onClick={props.onEliminar}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export { TodoItem };

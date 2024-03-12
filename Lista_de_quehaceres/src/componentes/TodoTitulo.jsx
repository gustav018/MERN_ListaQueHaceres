import React from 'react';
import './TodoTitulo.css';

function TodoTitulo({ total, completados }) {
  const mensaje =
    completados === total
      ? '¡Felicidades! Todas las tareas han sido completadas.'
      : `Tareas completadas: ${completados} de ${total}`;

  return (
    <>
      <h1>{mensaje}</h1>
    </>
  );
}

export { TodoTitulo };

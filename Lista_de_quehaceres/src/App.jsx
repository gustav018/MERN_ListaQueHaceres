import React, { useState } from 'react';
import './App.css';

import { TodoLista } from './componentes/TodoLista';
import { TodoItem } from './componentes/TodoItem';
import { BotonCrear } from './componentes/BotonCrear';

import './componentes/TodoTitulo.css';

const tareaList = [
  { tareaText: 'Lista de quehaceres', completado: false },
  { tareaText: 'Probar Input Buscar', completado: false },
  
];

function App() {
  const [inputBuscar, setInputBuscar] = React.useState('');
  const [tarea, setTarea] = React.useState(tareaList);
  const [nuevaTarea, setNuevaTarea] = React.useState('');

  const completarTarea = (tareaText) => {
    const newTareaList = tarea.map(item => {
      if (item.tareaText === tareaText) {
        return { ...item, completado: true };
      }
      return item;
    });
    setTarea(newTareaList);
  };

  const elminarTarea = (tareaText) => {
    const newTareaList = tarea.filter(item => item.tareaText !== tareaText);
    setTarea(newTareaList);
  };

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTarea([...tarea, { tareaText: nuevaTarea, completado: false }]);
      setNuevaTarea('');
    }
  };

  const buscarTarea = tarea.filter((tarea) => {
    return tarea.tareaText
      .toLocaleLowerCase()
      .includes(inputBuscar.toLocaleLowerCase());
  });

  return (
    <>
      <div className="container">
        <BotonCrear
          nuevaTarea={nuevaTarea}
          setNuevaTarea={setNuevaTarea}
          agregarTarea={agregarTarea}
        />
        <TodoLista>
          {buscarTarea.map((arr) => (
            <TodoItem
              key={arr.tareaText}
              tarea={arr.tareaText}
              completado={arr.completado}
              onComplete={() => completarTarea(arr.tareaText)}
              onEliminar={() => elminarTarea(arr.tareaText)}
            />
          ))}
        </TodoLista>
      </div>
    </>
  );
}

export default App;

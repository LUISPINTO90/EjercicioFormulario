import React from "react";

function Platillo({ platillo, eliminarPlatillo }) {
  const {
    id,
    comida,
    descripcion,
    acompaniantes,
    picor,
    num_personas,
    imagen,
  } = platillo;

  const handleEliminar = () => {
    eliminarPlatillo(id);
  };

  return (
    <div>
      <h3>{comida}</h3>
      <p>{descripcion}</p>
      <ul>
        {acompaniantes.map((acompaniante, index) => (
          <li key={index}>{acompaniante}</li>
        ))}
      </ul>
      <p>Picor: {picor}</p>
      <p>Número de personas: {num_personas}</p>
      <img src={imagen} alt={comida} />
      <button onClick={handleEliminar}>Eliminar</button>
    </div>
  );
}

export default Platillo;

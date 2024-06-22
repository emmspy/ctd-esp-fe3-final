import React, { useState } from "react";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleNombreChange = (e) => setNombre(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nombre y apellido:", nombre);
    console.log("Email:", email);
    setMensaje("Gracias por contactarnos");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Nombre y apellido</label>
        <input type="text" value={nombre} onChange={handleNombreChange} />
        <label>Email</label>
        <input type="email" value={email} onChange={handleEmailChange} />
        <button type="submit">Enviar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Form;

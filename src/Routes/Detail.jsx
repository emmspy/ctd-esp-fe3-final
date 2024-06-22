import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDentistContext } from "../Context/Context";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useDentistContext();
  const [dentistData, setDentistData] = useState(null);

  const getDentist = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await res.json();
      setDentistData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDentist();
  }, [id]);

  if (!dentistData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>
        <h1>Dentista numero {dentistData.id}</h1>
        <p>Nombre: {dentistData.name}</p>
        <p>Email: {dentistData.email}</p>
        <p>Teléfono: {dentistData.phone}</p>
      </div>
    </>
  );
};

export default Detail;

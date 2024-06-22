import React from "react";
import Card from "../Components/Card";
import { useDentistContext } from "../Context/Context";

const Favs = () => {

  const { state } = useDentistContext();
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
          {state.fav.map((fav) => (
            <Card key={fav.id} item={fav} />
          ))}
      </div>
    </>
  );
};

export default Favs;

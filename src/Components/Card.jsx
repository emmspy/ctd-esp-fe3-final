import React from "react";
import image from "/public/images/doctor.jpg";
import tHeart from "/public/gheart.png";
import Heart from "../../public/images/heart.png"
import { Link, useLocation } from "react-router-dom";
import { useDentistContext } from "../Context/Context"

const Card = ({ data }) => {

  const { dispatch } = useDentistContext()
  const location = useLocation();


    const handleAddFav = () => {
      dispatch({ type: "ADD_FAVS", payload: data });
    };

    const handleDeleteFav = () => {
      dispatch({ type: "DELETE_FAVS", payload: data });
    };

  return (
    <div className="card">
      <div className="card-container-images">
        <img src={image} alt="Doctor Image" className="card-container-doctor" />

        {location.pathname == "/" ? (
          <button className="card-container-button" onClick={handleAddFav}>
            <img
              src={tHeart}
              alt="Heart transparent"
              className="transparent-liked"
            />
          </button>
        ) : (
          <button className="card-container-button" onClick={handleDeleteFav}>
            <img 
              src={Heart} 
              alt="Heart" 
              className="transparent-liked" 
            />
          </button>
        )}
      </div>
      <Link to={"/detail/" + data.id}>
        <h3>{data.name}</h3>
        <p>{data.id}</p>
      </Link>
    </div>
  );
};

export default Card;

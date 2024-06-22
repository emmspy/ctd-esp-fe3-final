import { createContext, useContext, useEffect, useReducer } from "react";

const DentistContext = createContext();
const lsFav = JSON.parse(localStorage.getItem("fav")) || [];

const reducer = (state, action) => {
  switch (action.type) {
    
    case "GET_DENTIST":
      return { ...state, dentist: action.payload };

    case "ADD_FAVS":
       if (state.fav.some(fav => fav.id === action.payload.id)) {
        return state;
      }
      return { ...state, fav: [...state.fav, action.payload] };
    
    case "DELETE_FAVS":
      const filterfav = state.fav.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, fav: filterfav };
    
    case "TOGGLE_THEME": 
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };

    default:
      throw new Error("Error al modificar el estado");
  }
};

const initialState = {
  dentist: [],
  fav: lsFav,
  theme: "light",
};

const Context = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState);


  useEffect(() => {
      localStorage.setItem("fav", JSON.stringify(state.fav));
  }, [state.fav]);

  const getDentist = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    dispatch({ type: "GET_DENTIST", payload: data });
  };

  useEffect(() => {
    getDentist();
  }, []);


  return (
    <DentistContext.Provider value={{state, dispatch}}>
      {children}
    </DentistContext.Provider>
  );
}

export default Context;

export const useDentistContext = () => useContext(DentistContext);
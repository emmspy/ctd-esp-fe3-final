import React from 'react'
import { useDentistContext } from "../Context/Context";
import Card from '../Components/Card';


const Home = () => {
  const { state, dispatch } = useDentistContext()

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {state.dentist.length &&
          state.dentist.map((beer) => (
            <Card data={beer} key={beer.id}>
              <button
                onClick={() => dispatch({ type: "ADD_CART", payload: beer })}>
                🛒
              </button>
            </Card>
          ))}
      </div>
    </main>
  );
}

export default Home
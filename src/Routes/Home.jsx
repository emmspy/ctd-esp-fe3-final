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
          state.dentist.map((dentists) => (
            <Card data={dentists} key={dentists.id}/>
          ))}
      </div>
    </main>
  );
}

export default Home
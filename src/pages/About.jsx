import React from "react";
import {useName} from '../hooks/MyHook'
import Header from '../components/Header'

function About() {

  const [name, setName] = useName("Prajata")

  return (
    <div className="App">
      <Header name={name} />

      <h1>About {name}</h1>
      <p>Learning react!</p>
      <button onClick={() => setName("Sourajit")}>Change name</button>
    </div>
  );
}

export default About;

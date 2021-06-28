import { useState, useEffect, useHistory } from 'react';
import './App.css';
import {useName} from './hooks/MyHook'
import Header from './Header'

function App() {

  const [name, setName] = useName("Ankita")

  // const [name, setName] = useState("Ankita")
  // // const [user, setUser] = useState({})

  // useEffect(()=> {
  //   alert("Name Changed")
  //   setUser()
  // }, [])

  return (
    <div className="App">
      
      <Header name={name}/>

      <h1>Hello {name}</h1>
      <p>Learning react!</p>
      <button onClick={()=>setName("Sourajit")}>Change name</button>
    </div>
  );

}

export default App;

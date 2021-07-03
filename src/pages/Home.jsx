import React from "react";
import {useName} from '../hooks/MyHook'
import Header from '../components/Header'
import { useHistory, Link } from "react-router-dom";

function Home() {

  const history = useHistory("")
  const [name, setName] = useName("Ankita")

  const viewAbout = () => {
    history.push("/about");
  }

  return (
    <div className="App">
      <Header name={name} />

      <h1>Hello {name}</h1>
      <p>Learning react!</p>
      <button onClick={() => setName("Sourajit")}>Change name</button>

      <br/>
      <button onClick={viewAbout}>About</button>

      <div>
        <Link onClick={() => window.open("/about", "_blank")}>
            <span>About Window</span>
        </Link>
      </div>
    </div>
  );
}

export default Home;

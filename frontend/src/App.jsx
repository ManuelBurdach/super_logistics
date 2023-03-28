import "./App.css";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import LkwForm from "./Components/form/form";
import Output from "./Components/output/output";

function App() {
  const [lkws, setLkws] = useState();

  useEffect(() => {
    fetch("http://localhost:7777/api/v1/lkw")
      .then((res) => res.json())
      .then((data) => setLkws(data));
  }, []);

  return (
    <div className="App">
      <LkwForm setLkws={setLkws} />
      <section className="flex">
        {lkws?.map((lkw, i) => {
          return <Output key={uuidv4()} lkw={lkw} index={i + 1} />;
        })}
      </section>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import { Esame } from "../../api-types/esame";

function App() {
  const [esame, setEsame] = useState<Esame>({});

  const addEsame = () => {
    // const esame = {
    //   studente: "123",
    //   materie: [
    //     {
    //       nome: "Matematica",
    //       voto: 5,
    //     },
    //   ],
    // };
    fetch("http://localhost:3000/esami", {
      method: "POST",
      body: JSON.stringify(esame),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <div>
        <form>
          <label>
            Studente:
            <input
              type="text"
              value={esame.studente}
              onChange={(e) => setEsame({ ...esame, studente: e.target.value })}
            />
          </label>
        </form>
      </div>
      <div className="card">
        <button onClick={addEsame}>Aggiungi un esame</button>
      </div>
    </>
  );
}

export default App;

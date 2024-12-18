
import { useState } from "react";
import { Esame } from "../../../api-types/esame";
import { faker } from '@faker-js/faker';


export const AddExam: React.FC = () => {
    const [esame, setEsame] = useState<Esame>({} as Esame);

    const addEsame = () => {
        setEsame({ ...esame, studente: nomeStudente, materie: materie}),

        fetch("http://localhost:3000/esami", {
        method: "POST",
        body: JSON.stringify(esame),
        headers: { "Content-Type": "application/json" },
        })
        .then((response) => response.json())
        .then((data) => console.log(data));
    };

    const getMaterie = () => {
        const materie = [];

        for (let index = 0; index < Math.floor(Math.random() * 10) + 1; index++) {
            materie.push({
                nome: faker.lorem.word(),
                voto: Math.floor(Math.random() * 10) + 1,
            });
        }

        return materie;
    }

    const nomeStudente = faker.person.fullName();
    const materie = getMaterie();

    return (
        <>
        <div>
          <form>
            <label>
                Studente : {nomeStudente} <br></br>
                Materie: {materie.map(materia => materia).join(", ")} <br></br>
            </label>
          </form>
        </div>
        <div className="card">
            <button onClick={addEsame}>Aggiungi un esame</button>
        </div>
      </>
    );
};
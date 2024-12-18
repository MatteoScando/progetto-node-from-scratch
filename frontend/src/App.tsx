import { BrowserRouter, Route, Routes } from "react-router";
import './App.css';

import { Exams } from "./routes/esami.tsx";
import { AddExam } from "./routes/aggiungiEsame.tsx";
import { AddUser } from "./routes/utente/registrazione.tsx";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>

        <Route index element={<Exams />} />
        <Route path="aggiungiEsame" element={<AddExam />} />

        <Route path="utente">
          <Route path="registrazione" element={<AddUser/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App
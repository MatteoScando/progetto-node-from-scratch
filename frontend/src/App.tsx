import { BrowserRouter, Route, Routes } from "react-router";
import './App.css';

import { Exams } from "./routes/esami.tsx";
import { AddExam } from "./routes/aggiungiEsame.tsx";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route index element={<Exams />} />
        <Route path="aggiungiEsame" element={<AddExam />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App
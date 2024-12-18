import { useState, useEffect } from 'react';
import { Esame } from "../../../api-types/esame";
import { Box, Typography, Button } from '@mui/joy';
import { useNavigate } from "react-router";


export const Exams: React.FC = () => {
  const [esami, setEsami] = useState<Esame[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/esami')
      .then((response) => response.json())
      .then((data) => {
        setEsami(data);
      })
  }, []);

  const navigate = useNavigate();

  return (  
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 5}} >
        <Typography level="h1" >Elenco Esami</Typography>
        <Button size="md" onClick={() => { navigate("/aggiungiEsame") }} >Aggiungi Esame</Button>
      </Box>
      
      {esami.map((esame, indiceEsami) => (
        <Box key={indiceEsami} sx={{padding: 2, marginBottom: 2, border: '1px solid #c4c4c4', borderRadius: '5px' }}>
          <Typography level="h4">{esame.studente}</Typography>
          
          {esame.materie.map((materia, indiceMaterie) => (
            <Box key={indiceMaterie} sx={{padding: 1, marginTop: 1, border: '1px solid #c4c4c4', borderRadius: '5px' }}>
              <Typography level="title-md">{materia.nome}</Typography>
              <Typography level="body-md">Voto: <b>{materia.voto}</b></Typography>
            </Box>
          ))}

        </Box>
      ))}
    </>
  );
}
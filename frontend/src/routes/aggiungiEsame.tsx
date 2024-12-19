import { useState } from "react";
import { Esame, Materia } from "../../../api-types/esame";
import { faker } from '@faker-js/faker';
import { Box, Button, Input, FormLabel, Typography  } from '@mui/joy';


export const AddExam: React.FC = () => {
    // const getMaterie = () => {
    //     const materie:Materia[] = [];

    //     for (let index = 0; index < Math.floor(Math.random() * 10) + 1; index++) {
    //         materie.push({
    //             nome: faker.lorem.word(),
    //             voto: Math.floor(Math.random() * 10) + 1,
    //         });
    //     }

    //     return materie;
    // }

    // const [esame, setEsame] = useState<Partial<Esame>>({
    //     studente: faker.person.fullName(),
    //     materie: getMaterie()
    // } );

    const [esame, setEsame] = useState<Partial<Esame>>({});

    const addEsame = () => {
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
        <Typography level="h1" sx={{ mb: 5 }}>Aggiungi esame</Typography>
        <Box component="form" onSubmit={addEsame} sx={{ display: 'flex', flexDirection: 'column', gap: 2, border: '1px solid #c4c4c4', borderRadius: '5px', padding: 2}}>
            <FormLabel>Nome</FormLabel>
            <Input
                placeholder = "Inserisci nome"
                name="nome"
                value={esame.studente}
                onChange={(e) => setEsame({ ...esame, studente: e.target.value })}
            />
            <FormLabel>Materie</FormLabel>
            <Box sx={{ backgroundColor: '#f5f5f5', padding: 2, borderRadius: 1 }}>
                <Typography component="pre" sx={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
                    {JSON.stringify(esame.materie, null, 2)}
                </Typography>
            </Box>
            <Button type="submit">Submit</Button>
        </Box>
    </>
    );
};
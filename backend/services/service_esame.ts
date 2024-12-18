import { Esame, Materia } from "../../api-types/esame";
import DB from './db';

const materiaSchema = new DB.Schema<Materia>({
    nome: String,
    voto: Number,
}
);
const esameSchema = new DB.Schema<Esame>({
        // _id: String,
        studente: String,
        materie:[materiaSchema],
},
{
    timestamps:{
        createdAt:'created_at',
        updatedAt:'updated_at',
    }
}
);

const EsameModel = DB.model("esame", esameSchema);

export const inserisciEsame = async (esame:Esame) =>{
    const nuvoEsame = new EsameModel(esame);
    return nuvoEsame.save();
};

export const ottieniEsami = async () => {
    return EsameModel.find({});
};

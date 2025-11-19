import app from "../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";
import {getPeriodoAtual, getHora }from "./periodoAtual";

export default function BtnEnviar({valueNome, valueRegTrab ,valueObs, valueSelecionados, valueMaterias}){
    const checksSelect = Object.keys(valueSelecionados)

    function verificaTurnos(selecionados) {
        const contador = selecionados.reduce((acc, i) => {
            const [, turno] = i.split("|");
            acc[turno] = (acc[turno] || 0) + 1;
            return acc
            }, {})
            return contador};

    const saveData = async() => {
        const periodoatual = getPeriodoAtual()
        console.log(periodoatual)
        if (valueNome != "" && valueRegTrab != "" && valueMaterias.length != 0) {
                // PEGA O VALOR DOS INPUTs DO FORMULARIO E ARMAZENA
                        let dados = [
                            { valueNome },
                            { valueRegTrab },
                            { checksSelect },
                            { valueMaterias },
                            { valueObs },
                            ]
                            // const dados_formatados = dados.map(obj => Object.values(obj)[0]);
                            // console.log(dados)
        } else {
            alert("Preencha todos os Campos")};
                        
        const quantTurnos = verificaTurnos(checksSelect)
        if (Object.keys(quantTurnos).length == 0) {
            // MEXER AQUI, CORRIGIR
            alert("Assinalar 4 opções de dias por turno em que leciona")
        } else if ((quantTurnos["Manha"] >= 4) || (quantTurnos["Tarde"] >= 4) || (quantTurnos["Noite"] >= 4)) {
            const db = getDatabase(app)
            const newDocRef = push(ref(db, `Dados/${periodoatual}/${valueNome}`));
            set(newDocRef, {
                RegimeTrabalho: valueRegTrab,
                TurnosEDias: checksSelect,
                Materias: valueMaterias,
                Observações: valueObs,
                Hora: getHora()
            }).then( () => {
                alert("Dados Salvos com Sucesso!")

            }).catch((error)=>{
                console.log("error: ", error.message)
            })
        } else {
            alert("Assinalar 4 opções de dias por turno em que leciona")
            } 
    };

    return(
        <>
            <button 
            id="btn_enviar"
            type="submit" 
            onClick={saveData}>Enviar</button>
        </>
    )
}
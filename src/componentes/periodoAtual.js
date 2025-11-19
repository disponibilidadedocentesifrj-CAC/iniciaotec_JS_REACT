export function getPeriodoAtual(){
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = hoje.getMonth() + 1;
    const periodoAtual = mes <= 6 ? 1 :2;
    return `${ano}-${periodoAtual}`

}

export function getHora(){
    const hoje = new Date();
    const hora = hoje.getHours();
    const min = hoje.getMinutes();
    const seg = hoje.getSeconds();
    return `${hora}:${min}:${seg}`
}


const form = document.querySelector('#form-capsula');
const lsita = document.querySelector('#lista');
const aviso = document.querySelector('#aviso');

let capsulas = [
    {
        id: 1,
        autor: 'João Gabriel',
        titulo: ' Para mim em 2030',
        mensagem: 'Espera ter ganhado na Mega Sena',
        abre_em: '2030-01-01T00:00:00Z'
    },
    {
        id: 2,
        autor: 'Professor',
        titulo: 'Bem-vindos!',
        mensagem: 'Está cápsula já foi aberta',
        abre_em: '2020-01-01T00:00:00Z'
    }
];

function calcularContagem(dataFutura) {
    const diferenca = new Date(dataFutura) - new Date();
    if (diferenca <= 0) {
        return null;
    }
    const dias = Math.floor(diference / (1000 * 60 * 60* 24));
    const horas = Math.floor((diference / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diference / (1000 * 60 * 60)) % 60);
    return '${dias}d ${horas}h ${minutis}min';
}
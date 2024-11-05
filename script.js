let votoAtual = '';
const candidatos = {
  '12345': {
    nome: 'Filipe Inácio Diniz da Silva',
    partido: 'Partido A',
    avatarpng: './imagens/eu.png'
  },
  '54321': {
    nome: 'Gustavo Rodrigues',
    partido: 'Partido B',
    avatarpng: './imagens/gustavo.png'
  },
  '11122': {
    nome: 'Rivian Eveny Montefusco',
    partido: 'Partido C',
    avatarpng: './imagens/amor.png'
  }
};
function numerokey(num) {
  if (votoAtual.length < 5) {
    votoAtual += num;
    let inputs = document.querySelectorAll('.number3');
    for (let i = 0; i < votoAtual.length; i++) {
      inputs[i].value = votoAtual[i];
    }
    if (votoAtual.length === 5) {
      verificarCandidato(votoAtual);
    }
  }
}
function corrigir() {
  votoAtual = '';
  let inputs = document.querySelectorAll('.number3');
  inputs.forEach(input => input.value = '');
  limparCandidato();
}
function confirm() {
  if (votoAtual.length === 5) {
    alert("Voto confirmado: " + votoAtual);
    corrigir();
  } else {
    alert("Número de candidato incompleto.");
  }
}
function Branco(){
        document.getElementById('nometext').innerText = 'NULO';
        document.getElementById('partidotext').innerText = 'NULO';
        document.getElementById('avatarimg').src = './imagens/Design_sem_nome__1_-removebg-preview.png';
}
function verificarCandidato(numero) {
  const candidato = candidatos[numero];

  if (candidato) {
    document.getElementById('nometext').innerText = candidato.nome;
    document.getElementById('partidotext').innerText = candidato.partido;
    document.getElementById('avatarimg').src = candidato.avatarpng;
  } else {
    document.getElementById('nometext').innerText = 'Nulo';
    document.getElementById('partidotext').innerText = 'Sem Partido';
    document.getElementById('candidatoAvatar').src = './imagens/Design_sem_nome__1_-removebg-preview.png';
  }
}

function limparCandidato() {
  document.getElementById('nometext').innerText = 'Indefinido';
  document.getElementById('partidotext').innerText = 'Indefinido';
  document.getElementById('avatarimg').src = './imagens/Design_sem_nome__1_-removebg-preview.png';
}
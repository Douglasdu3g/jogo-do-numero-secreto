let listaNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}
function exibirMensagemInicial() {
    exibirTextNaTela('h1', 'Jogo do Número secreto');
    exibirTextNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
    }
exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextNaTela('h1', `Acertou!`);
        let palavraTentativas = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = ` Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}`;
        exibirTextNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        chute > numeroSecreto ? exibirTextNaTela('p','O Número Secreto é menor!')
        :exibirTextNaTela('p',`O Número Secreto é maior`);
    }
    tentativas ++;
    limparCampo();
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1);
   let quantidadeDeElementosSorteados = listaNumerosSorteados.length;
   if (quantidadeDeElementosSorteados==numeroLimite) {
        listaNumerosSorteados=[];
       }
   if (listaNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
   }else{
    listaNumerosSorteados.push(numeroEscolhido)
    console.log(listaNumerosSorteados);
    return numeroEscolhido;
   }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
    
}
reiniciarJogo();
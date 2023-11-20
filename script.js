var botaoSim = window.document.getElementById('botaoSim');
var botaoNao = window.document.getElementById('botaoNao');
var resposta = window.document.getElementById('resposta')

botaoNao.addEventListener('mouseenter', mexeSe);
botaoSim.addEventListener('click', apareceMensagem);
botaoSim.addEventListener('mouseenter', mudaCor);
botaoSim.addEventListener('mouseout', restauraCor);

function mexeSe(event) {
    botaoNao.classList.add('mexendo');

    setTimeout(function(){
        botaoNao.classList.remove('mexendo');
    }, 1000);
}

function apareceMensagem(event) {
    botaoSim.style.background = 'green';
    botaoSim.style.color = 'white';
    resposta.innerHTML = `Você você fez a melhor escolha! Só basta falar o dia e a hora \u2764`;
    resposta.style.color =  'white';
    resposta.style.fontSize = '32px';
    resposta.style.border = 'solid 5px white';
    resposta.style.borderRadius = '25px';
    resposta.style.padding = '15px';

    var texto = window.document.createElement('h2')
    resposta.appendChild(texto);
    texto.innerHTML = `Estou lhe perguntando novamente, pois gostei muito de ter saído contigo, e estou com saudades do seu abraço, do seu beijo, de conversar pessoalmente enquanto aprecio o seu lindo sorriso \u2764 . Você simpleste apareceu em um momento que estava tudo preto e branco, no qual você coloriu com sua simpatia, com esse seu jeitinho delicado, com sua forma amorosa de ser \u2764... Obrigado por tudo que você faz por mim, por ser essa pessoa incrível, muito dedicada, que a cada dia você me surpreende mais e mais. Você é muito importante pra mim, se eu pudesse pararia o tempo só para passar mais tempo contigo. Amo seu sorriso, amo seu cabelo, amo tudo em você. Você é a minha Princesa \u2764`;
    texto.style.fontSize = '28px';

    var assinatura = window.document.createElement('h3');
    resposta.appendChild(assinatura);
    assinatura.innerHTML = `&copy Alejandro Carvalho para Princesa Marcela \u2764`;
    resposta.style.display = 'flex';
    resposta.style.flexDirection = 'column';
    resposta.style.textAlign = 'center';
}

function mudaCor(event) {
    botaoSim.style.background = 'white';
    botaoSim.style.color = 'black';
}

function restauraCor(event) {
    botaoSim.style.background = 'rgb(232, 54, 54)';
    botaoSim.style.color = 'white';
}
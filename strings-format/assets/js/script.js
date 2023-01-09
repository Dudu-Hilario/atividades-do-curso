let input = document.getElementById("nome");
let button = document.getElementById("btn");
let tagP = document.querySelectorAll("p"); //NodeList 

button.addEventListener("click", (e) => {
    e.preventDefault();
    let nomeUsuario = input.value;
    
    let nome = `Seu nome é: ${nomeUsuario}`; //0
    let nomeTamanho = `O tamanho do seu nome é: ${nomeUsuario.length}`; //1
    let segundaLetra = `a segunda letra do seu nome é: ${nomeUsuario.charAt(1)}`; //2
    let primeiroIndice = `O primeiro indice da letra do seu nome é: ${nomeUsuario.indexOf(nomeUsuario[0])}`; //3
    let ultimoIndice = `O ultimo indice do seu nome é: ${nomeUsuario.indexOf(nomeUsuario[-1])}`; //4
    let ultimas3letras = `As ultimas 3 letras do seu nome é: ${nomeUsuario.slice(-4)}`; //5
    let nomeMaiusculo = `Seu nome com letras maiusculas: ${nomeUsuario.toUpperCase()}`; //6
    let nomeMinusculo = `Seu nome com letras minusculas: ${nomeUsuario.toLowerCase()}`; //7

    // array com todas as variaveis a cima
    let lista = [nome, nomeTamanho, segundaLetra, primeiroIndice, ultimoIndice, ultimas3letras, nomeMaiusculo, nomeMinusculo]
    
    // exibir na tela 
    for (p in tagP){
        tagP[p].innerHTML = lista[p];
    }
    
})
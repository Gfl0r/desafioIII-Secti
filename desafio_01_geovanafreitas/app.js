function calcularMedia() {
    let media1 = prompt("Insira a primeira nota");
    let media2 = prompt("Insira a segunda nota");
    let media3 = prompt("Insira a terceira nota");

    media1 = parseInt(media1);
    media2 = parseInt(media2);
    media3 = parseInt(media3);

    let resultado = (media1 + media2 + media3)/3;

    alert("A média é igual a " + resultado);
}
function descobrirMaiorMenor() {
    let numeros= prompt("Insira os números separados por vírgulas");
    let numerosArray= numeros.split(",").map(numero => parseInt(numero.trim()));

    let menorNumero= Math.min(...numerosArray);
    let maiorNumero= Math.max(...numerosArray);

    alert("O menor número é " + menorNumero + " e o maior é " + maiorNumero);
}
function ordenarFrascos() {
    let frascos = prompt("Insira os números dos frascos separados por vírgulas");
    let frascosArray = frascos.split(",").map(frasco => parseInt(frasco.trim()));

    let frascosOrdenados = frascosArray.sort((a,b) => a-b);
    alert("A ordem dos frascos é " + frascosOrdenados);
}
function listarPrimos() {
    function verificarNumero(numeroVerificando) {
        for (let i = 2; i * i <= numeroVerificando; i++){
            if (numeroVerificando % i === 0){
                return false;
            }
        }
        return true;
    }

    // Recebendo e tratando os números
    let listaNumeros = prompt("Insira os números separados por vírgula")
    let numerosArray = listaNumeros.split(",").map(numero => parseInt(numero.trim()))

    // verificar número por número
    let numerosPrimos = [];
    for (let cadaNumero of numerosArray){
        if (verificarNumero(cadaNumero)){
            numerosPrimos.push(cadaNumero);
        }
    }

    alert("Os números " + numerosPrimos + " são primos");
}
function contarPalavras() {
    let frase = prompt("Digite a frase para contagem das palavras");
    let palavras = frase.split(" ");
    let resultado = palavras.length;
    alert('A frase "' + frase + '" tem ' + resultado + ' palavras.');
}
function encontrarFatorial() {
    let numeroInicial = prompt("Insira o número que deseja calcular o fatorial");
    numeroInicial = parseInt(numeroInicial);

    let resultado = 1;
    for (let i = 1; i <= numeroInicial; i++){
        resultado *= i;
    }

    alert(numeroInicial + "! é igual a " + resultado);
}
function calcularTotalCompra() {
    let numerosCompra = prompt("Coloque APENAS os valores separados por +");
    let parcelasCompra = numerosCompra.split("+").map(parcela => parseFloat(parcela.replace(",", ".")));

    let soma = 0;

    for (let valor of parcelasCompra){
        soma += valor;
    }

    alert("Valor total da compra igual a " + soma + " reais");
}

function calcularMulta() {
    let dias = prompt("Há quantos dias a devolução está atrasada? Insira apenas o número");
    dias = parseInt(dias);
    let valorMulta = dias * 0.50;
    valorMulta = valorMulta.toString().replace(".", ",");
    alert("O valor da multa é de R$ " + valorMulta);
}
function pontosVida() {
    let vidaInicial = 100;
    let danoAtaque= 20;
    let numeroAtaquesSofridos = prompt("Insira a quantidade de ataques sofridos");
    numeroAtaquesSofridos = parseInt(numeroAtaquesSofridos);
    let danoTotal = numeroAtaquesSofridos * danoAtaque;
    let vidaRestante = vidaInicial - danoTotal;

    alert("Você tem " + vidaRestante + " pontos de vida restante.");
}
function caracteresMaiusculos() {
    let frase = prompt("Insira a frase para contar os caracteres maiúsculos");
    let contador = 0;

    for (let i = 0; i < frase.length; i++){
        let caractereOriginal = frase[i];
        let novoMaiusculo = caractereOriginal.toUpperCase();

        if (caractereOriginal !== " " && caractereOriginal === novoMaiusculo){
            contador = contador + 1;
        }
    }

    alert("A sua frase tem " + contador + " caracteres maiúsculos")
}
function calcularIdade() {
    let dataNascimento = prompt("Digite a data de nascimento no formato yyyy-MM-dd");
    let anoNascimento = new Date(dataNascimento).getFullYear();
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - anoNascimento;
    alert("Você tem " + idade + " anos de idade.");
}
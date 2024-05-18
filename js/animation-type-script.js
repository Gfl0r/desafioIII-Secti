document.addEventListener("DOMContentLoaded", function() {
    var texto = "Geovana Freitas";
    var atraso = 200;
    let nomeAutorElemento = document.getElementById("nome-autor");
    let sobrenomeElemento = document.getElementById("sobrenome");

    var contadorDeLetras = 0;
    function escreverTexto() {
        if (contadorDeLetras <= texto.length) {
            if (contadorDeLetras < 8) { // "Geovana" tem 7 letras
                nomeAutorElemento.textContent += texto.charAt(contadorDeLetras);
            } if (contadorDeLetras === 8) { // Começa a escrever o sobrenome a partir do índice 8
                nomeAutorElemento.innerHTML += '<span id="sobrenome"></span>';
            } if (contadorDeLetras > 8) {
                document.getElementById("sobrenome").textContent += texto.charAt(contadorDeLetras - 1);
            }
            contadorDeLetras++;
            setTimeout(escreverTexto, atraso);
        }
    }

    // Inicia os elementos vazios para o efeito de digitação
    nomeAutorElemento.textContent = "";
    sobrenomeElemento.textContent = "";
    escreverTexto();
});

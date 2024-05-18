// Máscara do CPF
function cpfMask(campo) {
    let cpf = campo.value.replace(/\D/g, '');
    // Aplicando a máscara (formato: 00.000-000)
    if (cpf.length > 3) {
        cpf = cpf.substring(0, 3) + '.' + cpf.substring(3);
    }
    if (cpf.length > 7) {
        cpf = cpf.substring(0,7) + '.' + cpf.substring(7);
    }
    if (cpf.length > 10) {
        cpf = cpf.substring(0,11) + '-' + cpf.substring(11);
    }
    campo.value = cpf;
}
// Máscara do telefone
function telMask(campo) {
    let tel = campo.value.replace(/\D/g, '');
    // Aplicando a máscara (formato: (00)90090-0000)
    if (tel.length > 2) {
        tel = '(' + tel.substring(0, 2) + ')' + tel.substring(2);
    }
    if (tel.length > 9) {
        tel = tel.substring(0, 9) + '-' + tel.substring(9);
    }
    if (tel.length === 14) {
        tel = tel.substring(0, 4) + ' ' + tel.substring(4);
        tel = tel.substring(0, 6) + ' ' + tel.substring(6);
    }
    // Definindo o valor formatado de volta no input
    campo.value = tel;
}

// Máscara do CEP
const cepInput = document.getElementById('cep');

// Adicionando um ouvinte de evento de input para formatar o valor do CEP
cepInput.addEventListener('input', function() {
    // Obtendo o valor atual do input e removendo todos os caracteres não numéricos
    let cep = this.value.replace(/\D/g, '');

    // Aplicando a máscara (formato: 00.000-000)
    if (cep.length > 2) {
        cep = cep.substring(0, 2) + '.' + cep.substring(2);
    }
    if (cep.length >= 7) {
        cep = cep.substring(0,6) + '-' + cep.substring(6);
    }

    // Definindo o valor formatado de volta no input
    this.value = cep;
});

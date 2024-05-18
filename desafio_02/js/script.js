// Função para mudar o nome do arquivo na label do Input FILE
function nomearquivo(arquivo, div, conteudo) {
    // Verifique se há algum arquivo selecionado
    if (arquivo.files.length > 0) {
        // Acesse o primeiro arquivo selecionado e obtenha o nome
        const nomeFileRG = arquivo.files[0].name;
        div.innerHTML = conteudo + nomeFileRG;
    }
}

// Input FILE da ETAPA 01
const file_rg = document.getElementById('file_rg');
const divRG = document.getElementById('div-rg');

// Input FILE da ETAPA 01.1
const file_rg_responsavel = document.getElementById('file_rg_responsavel');
const divRGR = document.getElementById('div-responsavel');

// Input FILE da ETAPA 02
const file_diploma = document.getElementById('file_diploma');
const divDiploma = document.getElementById('div-diploma');

// Input FILE da ETAPA 03
const file_comprovante = document.getElementById('comprovante_residencia');
const divComprovante = document.getElementById('div-comprovante');

// Atualizando o conteúdo da div para exibir o nome do arquivo selecionado
file_rg.addEventListener('change', function () {
    nomearquivo(file_rg, divRG, "<h3>Documento de identidade</h3>");
});
file_rg_responsavel.addEventListener('change', function () {
    nomearquivo(file_rg_responsavel, divRGR, "<h3>Identidade do responsável</h3>");
});
file_diploma.addEventListener('change', function () {
    nomearquivo(file_diploma, divDiploma, "<h3>Diploma de conclusão</h3>");
});
file_comprovante.addEventListener('change', function () {
    nomearquivo(file_comprovante, divComprovante, "<h3>Comprovante de residência</h3>");
});

// Função para transitar entre as etapas
function nextEtapa(atual, destino, volta) {
    let etapaAtual = document.getElementById(atual);
    let proximaEtapa = document.getElementById(destino);

    // Verifica a função está no botão de próxima etapa ou no de voltar
    if (volta === false) {

        // Se a etapa atual for "pessoais", o sistema vai verificar se a pessoa é menor de idade para mostrar ou não a etapa 01.1
        if (atual == 'pessoais') {
            // Obtém a data de nascimento informada
            const dataNascimentoInput = document.getElementById('data_nascimento')
            if (dataNascimentoInput.value) {
                const dataNascimento = new Date(dataNascimentoInput.value);
                const idade = new Date().getFullYear() - dataNascimento.getFullYear();

                // Verifica se a idade é menor que 18 anos
                if (idade < 18) {
                    // Se for menor de 18 anos, mostra a etapa dos dados do responsável
                    etapaAtual.classList.remove('etapaAtiva');
                    proximaEtapa.classList.add('etapaAtiva');
                } else {
                    // Se for maior ou igual a 18 anos, mostra a próxima etapa normalmente
                    etapaAtual.classList.remove('etapaAtiva');
                    document.getElementById('escolaridade').classList.add('etapaAtiva');
                }
            } else {
                etapaAtual.classList.remove('etapaAtiva');
                document.getElementById('escolaridade').classList.add('etapaAtiva');
            }
        } else {

            etapaAtual.classList.remove('etapaAtiva');
            proximaEtapa.classList.add('etapaAtiva');

            if (atual == 'trilha') {
                validationData();
            }

        }
    }

    // No caso da volta, o sistema verifica novamente se a pessoa é menor de idade para saber se vai mostrar a etapa 01.01
    else {
        if (atual == 'escolaridade') {
            // Obtém a data de nascimento informada
            const dataNascimentoInput = document.getElementById('data_nascimento')
            if (dataNascimentoInput.value) {
                const dataNascimento = new Date(dataNascimentoInput.value);

                // Calcula a idade baseada na data de nascimento
                const idade = new Date().getFullYear() - dataNascimento.getFullYear();

                // Verifica se a idade é menor que 18 anos
                if (idade < 18) {
                    // Se for menor de 18 anos, mostra a etapa dos dados do responsável
                    etapaAtual.classList.remove('etapaAtiva');
                    proximaEtapa.classList.add('etapaAtiva');
                } else {
                    // Se for maior ou igual a 18 anos, mostra a próxima etapa normalmente
                    etapaAtual.classList.remove('etapaAtiva');
                    document.getElementById('pessoais').classList.add('etapaAtiva');
                }
            } else {
                etapaAtual.classList.remove('etapaAtiva');
                document.getElementById('pessoais').classList.add('etapaAtiva');
            }
        } else {
            etapaAtual.classList.remove('etapaAtiva');
            proximaEtapa.classList.add('etapaAtiva');
        }
    }

}

// Função para buscar cep
function searchCep(campo) {
    const cep = campo.value.replace(/\D/g, '');
    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    document.getElementById('cidade').value = data.localidade;
                    document.getElementById('estado').value = data.uf;
                    document.getElementById('logradouro').value = data.logradouro;
                    document.getElementById('bairro').value = data.bairro;
                } else {
                    document.getElementById('cidade').value = '';
                    document.getElementById('estado').value = '';
                    document.getElementById('logradouro').value = '';
                    document.getElementById('bairro').value = '';
                }
            })
            .catch(error => {
                console.error('Ocorreu um erro ao buscar o CEP:', error);
                alert('Ocorreu um erro ao buscar o CEP. Por favor, tente novamente mais tarde.');
            });
    }
}
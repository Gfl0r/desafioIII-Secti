function validationData() {
    validationPessoais();
    if(menorDeIdade(validationPessoais()['data']) === true){
        if (document.getElementById('confirme-responsavel').classList.contains('responsavel-desativo')){
            document.getElementById('confirme-responsavel').classList.remove('responsavel-desativo')
        }
        validationResponsavel();
    }
    else {
        if (!document.getElementById('confirme-responsavel').classList.contains('responsavel-desativo')){
            document.getElementById('confirme-responsavel').classList.add('responsavel-desativo')
        }
    }
    validationEscolaridade();
    validationEndereco();
    validationTrilha();

    if (validationPessoais()['validado'] === true){
        if(menorDeIdade(validationPessoais()['data']) === true){
            if (validationResponsavel() === true && validationEscolaridade() === true && validationEndereco() === true && validationTrilha() === true) {
                return true
            } else {
                return false;
            }
        }else {
            if (validationEscolaridade() === true && validationEndereco() === true && validationTrilha() === true){
                return true
            }else {
                return false;
            }
        }
    } else {
        return false
    }
}

function validationPessoais() {
    // Dados Pessoais
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    const dataNascimento = document.getElementById('data_nascimento').value;
    const cpf = document.getElementById('cpf').value;
    const rg = document.getElementById('rg').value;
    const file_rg = document.getElementById('file_rg').value;

    // Array para armazenar os campos não preenchidos
    let camposNaoPreenchidos = [];

    // Verificando se todos os campos estão preenchidos
    if (!nome) camposNaoPreenchidos.push('Nome');
    if (!email) camposNaoPreenchidos.push('Email');
    if (!tel) camposNaoPreenchidos.push('Telefone');
    if (!dataNascimento) camposNaoPreenchidos.push('Data de Nascimento');
    if (!cpf) camposNaoPreenchidos.push('CPF');
    if (!rg) camposNaoPreenchidos.push('RG');
    if (!file_rg) camposNaoPreenchidos.push('Documento de Identidade');

    // Objeto para armazenar os dados do formulário e o resultado da validação
    const dadosFormulario = {
        "Nome": nome,
        "Email": email,
        "Telefone": tel,
       "Data de Nascimento": dataNascimento,
        "CPF": cpf,
        "RG": rg,
        "Documento de identidade": file_rg,
        camposNaoPreenchidos: camposNaoPreenchidos // Lista de campos não preenchidos
    };

    // Exibindo os dados na div

    if (camposNaoPreenchidos.length > 0) {
        // Exibindo os campos não preenchidos na div
        const divNPPessoais = document.getElementById('np-pessoais');
        divNPPessoais.classList.add('nvalidado')

        divNPPessoais.innerHTML = ''; // Limpa o conteúdo atual da div

        // Adicionando os campos não preenchidos na div
        divNPPessoais.textContent = `Os campos ${camposNaoPreenchidos.join(', ')} não foram preenchidos`;

        return {
            data: dadosFormulario["Data de Nascimento"],
            validado: false
        };
    } else {
        const divNPPessoais = document.getElementById('np-pessoais');
        divNPPessoais.classList.remove('nvalidado')
        // Se todos os campos foram preenchidos, exibe os dados em um <p> dentro da div confirme-pessoais
        const divConfirmePessoais = document.getElementById('confirme-pessoais');
        divConfirmePessoais.innerHTML = '<h3>Dados Pessoais</h3><span class="nao-preenchidos" id="np-pessoais"></span>'
        // Cria um <p> para cada campo preenchido e adiciona na div
        for (const [campo, valor] of Object.entries(dadosFormulario)) {
            if (campo !== 'camposNaoPreenchidos') {
                const paragrafo = document.createElement('p');
                paragrafo.innerHTML = `<strong>${campo}</strong>: ${valor}`;
                divConfirmePessoais.appendChild(paragrafo);
            }
        }

        return {
            data: dadosFormulario["Data de Nascimento"],
            validado: true
        };
    }
}

function validationResponsavel() {
    const nomeResponsavel = document.getElementById('nome_resposavel').value;
    const emailResponsavel = document.getElementById('email_resposavel').value;
    const dataNascimentoResponsavel = document.getElementById('data_nascimento_resposavel').value;
    const cpfResponsavel = document.getElementById('cpf_resposavel').value;
    const rgResponsavel = document.getElementById('rg_resposavel').value;
    const file_rg_responsavel = document.getElementById('file_rg_responsavel').value;

    let camposNaoPreenchidos = [];

    if (!nomeResponsavel) camposNaoPreenchidos.push('Nome do responsável');
    if (!emailResponsavel) camposNaoPreenchidos.push('Email do responsável');
    if (!dataNascimentoResponsavel) camposNaoPreenchidos.push('Data de nascimento do responsável');
    if (!cpfResponsavel) camposNaoPreenchidos.push('CPF do responsável');
    if (!rgResponsavel) camposNaoPreenchidos.push('RG do responsável');
    if (!file_rg_responsavel) camposNaoPreenchidos.push('Documento de Identidade do responsável');

    const dadosResponsavel = {
        "Nome": nomeResponsavel,
        "Email": emailResponsavel,
        "Data de Nascimento": dataNascimentoResponsavel,
        "CPF": cpfResponsavel,
        "RG": rgResponsavel,
        "Documento de identidade": file_rg_responsavel,
        camposNaoPreenchidos: camposNaoPreenchidos
    };


    if (camposNaoPreenchidos.length > 0) {
        const divNPPessoais = document.getElementById('np-responsavel');
        divNPPessoais.classList.add('nvalidado');
        divNPPessoais.innerHTML = '';
        divNPPessoais.textContent = `Os campos ${camposNaoPreenchidos.join(', ')} não foram preenchidos`;

        return false;
    } else {
        const divNPPessoais = document.getElementById('np-responsavel');
        divNPPessoais.classList.remove('nvalidado');
        const divConfirmeResponsavel = document.getElementById('confirme-responsavel');
        divConfirmeResponsavel.innerHTML = '<h3>Dados Responsável</h3><span class="nao-preenchidos" id="np-responsavel"></span>'
        for (const [campo, valor] of Object.entries(dadosResponsavel)) {
            if (campo !== 'camposNaoPreenchidos') {
                const paragrafo = document.createElement('p');
                paragrafo.innerHTML = `<strong>${campo}</strong>: ${valor}`;
                divConfirmeResponsavel.appendChild(paragrafo);
            }
        }

        return true;
    }
}

function validationEscolaridade() {
    const grauEscolaridade = document.getElementById('grau_escolaridade').value;
    const instituicao = document.getElementById('instituicao').value;
    const curso = document.getElementById('curso').value;
    const enderecoInstituicao = document.getElementById('endereco_instituicao').value;
    const fileDiploma = document.getElementById('file_diploma').value;

    let camposNaoPreenchidos = [];

    if (!grauEscolaridade) camposNaoPreenchidos.push('Grau de escolaridade');
    if (!instituicao) camposNaoPreenchidos.push('Instituição');
    if (!curso) camposNaoPreenchidos.push('Curso');
    if (!enderecoInstituicao) camposNaoPreenchidos.push('Endereço da instituição');
    if (!fileDiploma) camposNaoPreenchidos.push('Diploma de conclusão');

    const dadosEscolaridade = {
        "Grau de Escolaridade": grauEscolaridade,
        "Instituição": instituicao,
        "Curso": curso,
        "Endereço da Instituição": enderecoInstituicao,
        "Diploma de Conclusão": fileDiploma,
        camposNaoPreenchidos: camposNaoPreenchidos
    };

    if (camposNaoPreenchidos.length > 0) {
        const divNPEscolaridade = document.getElementById('np-escolaridade');
        divNPEscolaridade.classList.add('nvalidado');
        divNPEscolaridade.innerHTML = '';
        divNPEscolaridade.textContent = `Os campos ${camposNaoPreenchidos.join(', ')} não foram preenchidos`;

        return false;
    } else {
        const divNPEscolaridade = document.getElementById('np-escolaridade');
        divNPEscolaridade.classList.remove('nvalidado');
        const divConfirmeEscolaridade = document.getElementById('confirme-escolaridade');
        divConfirmeEscolaridade.innerHTML = '<h3>Dados Escolaridade</h3><span class="nao-preenchidos" id="np-escolaridade"></span>';
        for (const [campo, valor] of Object.entries(dadosEscolaridade)) {
            if (campo !== 'camposNaoPreenchidos') {
                const paragrafo = document.createElement('p');
                paragrafo.innerHTML = `<strong>${campo}</strong>: ${valor}`;
                divConfirmeEscolaridade.appendChild(paragrafo);
            }
        }

        return true
    }
}

function validationEndereco() {
    const logradouro = document.getElementById('logradouro').value;
    const bairro = document.getElementById('bairro').value;
    const numeroCasa = document.getElementById('numero_casa').value;
    const complementoCasa = document.getElementById('complemento_casa').value;
    const cep = document.getElementById('cep').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const fileComprovanteResidencia = document.getElementById('comprovante_residencia').value;

    let camposNaoPreenchidos = [];

    if (!logradouro) camposNaoPreenchidos.push('Logradouro');
    if (!bairro) camposNaoPreenchidos.push('Bairro');
    if (!numeroCasa) camposNaoPreenchidos.push('Número');
    if (!cep) camposNaoPreenchidos.push('CEP');
    if (!fileComprovanteResidencia) camposNaoPreenchidos.push('Comprovante de Residência');

    const dadosEndereco = {
        "Logradouro": logradouro,
        "Bairro": bairro,
        "Número": numeroCasa,
        "Complemento": complementoCasa,
        "CEP": cep,
        "Cidade": cidade,
        "Estado": estado,
        "Comprovante de Residência": fileComprovanteResidencia,
        camposNaoPreenchidos: camposNaoPreenchidos
    };

    if (camposNaoPreenchidos.length > 0) {
        const divNPResponsavel = document.getElementById('np-endereco');
        divNPResponsavel.classList.add('nvalidado');
        divNPResponsavel.innerHTML = '';
        divNPResponsavel.textContent = `Os campos ${camposNaoPreenchidos.join(', ')} não foram preenchidos`;

        return false
    } else {
        const divNPResponsavel = document.getElementById('np-endereco');
        divNPResponsavel.classList.remove('nvalidado');
        const divConfirmeEndereco = document.getElementById('confirme-endereco');
        divConfirmeEndereco.innerHTML = '<h3>Endereço</h3><span class="nao-preenchidos" id="np-endereco"></span>';
        for (const [campo, valor] of Object.entries(dadosEndereco)) {
            if (campo !== 'camposNaoPreenchidos') {
                const paragrafo = document.createElement('p');
                paragrafo.innerHTML = `<strong>${campo}</strong>: ${valor}`;
                divConfirmeEndereco.appendChild(paragrafo);
            }
        }

        return true
    }
}

function validationTrilha() {
    const qualTrilha = document.getElementById('qual_trilha').value;
    const jaConhece = document.getElementById('ja_conhece').value;
    const porque = document.getElementById('porque').value;
    const conheceu = document.querySelectorAll('input[name="conheceu[]"]:checked');
    const outroMeio = document.querySelector('input[name="outroMeio"]').value;

    let meioConhecido = [];
    conheceu.forEach(input => {
        meioConhecido.push(input.value);
    });

    let camposNaoPreenchidos = [];

    if (!qualTrilha) camposNaoPreenchidos.push('Trilha');
    if (!jaConhece) camposNaoPreenchidos.push('Experiência na área');
    if (!porque) camposNaoPreenchidos.push('Motivação para participar');
    if (meioConhecido.length === 0) camposNaoPreenchidos.push('Meio pelo qual conheceu');
    if (meioConhecido.includes('outro') && !outroMeio) {
        meioConhecido = meioConhecido.filter(meio => meio !== 'outro');
        camposNaoPreenchidos.push('Especifique outro meio');
    }

    const dadosTrilha = {
        "Trilha": qualTrilha,
        "Experiência na área": jaConhece,
        "Motivação para participar": porque,
        "Meio pelo qual conheceu": meioConhecido,
        "Especifique outro meio": outroMeio,
        camposNaoPreenchidos: camposNaoPreenchidos
    };

    if (camposNaoPreenchidos.length > 0) {
        const divNPTrilha = document.getElementById('np-trilha');
        divNPTrilha.classList.add('nvalidado');
        divNPTrilha.innerHTML = '';
        divNPTrilha.textContent = `Os campos ${camposNaoPreenchidos.join(', ')} não foram preenchidos`;

        return false;
    } else {
        const divNPTrilha = document.getElementById('np-trilha');
        divNPTrilha.classList.remove('nvalidado');
        const divConfirmeTrilha = document.getElementById('confirme-trilha');
        divConfirmeTrilha.innerHTML = '<h3>Sobre o programa</h3><span class="nao-preenchidos" id="np-trilha"></span>';
        for (const [campo, valor] of Object.entries(dadosTrilha)) {
            if (campo !== 'camposNaoPreenchidos' && valor !== "") {
                const paragrafo = document.createElement('p');
                paragrafo.innerHTML = `<strong>${campo}</strong>: ${Array.isArray(valor) ? valor.join(', ') : valor}`;
                divConfirmeTrilha.appendChild(paragrafo);
            }
        }

        return true
    }
}

function menorDeIdade(dataNascimento) {
    const dataAtual = new Date();

    const dataNasc = new Date(dataNascimento);

    const diffAnos = dataAtual.getFullYear() - dataNasc.getFullYear();

    if (diffAnos < 18) {
        return true; // É menor de idade
    } else {
        return false; // Não é menor de idade
    }
}

function enviar() {
    if (validationData() === true) {
        const formulario = document.getElementById('inscricoes-inova');
        formulario.submit();
        alert('Inscrição enviada');
    } else {
        alert('Sua inscrição não pode ser enviada porque alguns campos não foram preenchidos.')
    }
}
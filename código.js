function clicar() {
    var l0 = window.document.querySelector("select#opcoes0")
    var l1 = window.document.querySelector("select#opcoes1")
    var l2 = window.document.querySelector("select#opcoes2")
    var l3 = window.document.querySelector("select#opcoes3")
    var convl0 = l0.value
    var convl1 = l1.value
    var convl2 = l2.value
    var convl3 = l3.value
    if (convl0 == "Sim" && convl1 == "Limitada" && convl2 == "Imobiliária" && convl3 == "AR positivo" || convl0 == "Sim" && convl1 == "Pessoa Física" && convl2 == "Imobiliária" && convl3 == "AR positivo" || convl0 == "Sim" && convl1 == "Pessoa Física" && convl2 == "Mobiliária" && convl3 == "AR positivo") {
        window.document.querySelector("p#resultado").innerHTML = "Deverá ser realizado(a) um(a): <strong>Penhora Online<strong/>" //Penhora online de Limitada e Pessoa Física
    } else
    if (convl0 == "Sim" && convl1 == "Pessoa Física" && convl2 == "Imobiliária" && convl3 == "AR negativo" || convl0 == "Sim" && convl1 == "Pessoa Física" && convl2 == "Mobiliária" && convl3 == "AR negativo") {
        window.document.querySelector("p#resultado").innerHTML = "Deverá ser realizado(a) um(a): <strong>Arresto Online<strong/>" //Arresto online de pessoa física
    } else 
    if (convl0 == "Sim" && convl1 == "Limitada" && convl2 == "Imobiliária" && convl3 == "Não houve Citação" || convl0 == "Sim" && convl1 == "Limitada" && convl2 == "Mobiliária" && convl3 == "Não houve Citação" || convl0 == "Sim" && convl1 == "Pessoa Física" && convl2 == "Imobiliária" && convl3 == "Não houve Citação" || convl0 == "Sim" && convl1 == "Pessoa Física" && convl2 == "Mobiliária" && convl3 == "Não houve Citação" || convl0 == "Sim" && convl1 == "Empresário Individual" && convl2 == "Imobiliária" && convl3 == "Não houve Citação" || convl0 == "Sim" && convl1 == "Empresário Individual" && convl2 == "Mobiliária" && convl3 == "Não houve Citação"){
        window.document.querySelector("p#resultado").innerHTML = "<strong>Deverá ser requerida a Citação do(a) Executado(a)<strong/>" //Pedido de Citação para qualquer tipo de executado
    } else
    if (convl0 == "Sim" && convl1 == "Empresário Individual" && convl2 == "Imobiliária" && convl3 == "AR positivo" || convl0 == "Sim" && convl1 == "Empresário Individual" && convl2 == "Mobiliária" && convl3 == "AR positivo") {
        window.alert("Deverá ser realizada a ---PENHORA ONLINE---"+"\n"+"\n"+ "OBSERVAÇÃO: tratando-se de Empresário Individual, será necessária obrigatoriamente a inclusão do CPF na petição, além do CNPJ"+"\n"+ "\n"+"Ainda, deverão ser juntadas as fichas da Receita Federal e Jucesp junto com a Petição"+"\n"+ "\n"+"Ficha da Jucesp: quando juntada com a petição tem a finalidade de indicar o CPF do Executado"+"\n"+ "\n"+"Ficha da Receita: quando juntada com a petição, tem a finalidade de demonstrar que o(a) Executado(a) é de fato Empresário Individual")
    } else
    if (convl0 == "Sim" && convl1 == "Empresário Individual" && convl2 == "Imobiliária" && convl3 == "AR negativo" || convl0 == "Sim" && convl1 == "Empresário Individual" && convl2 == "Mobiliária" && convl3 == "AR negativo") {
        window.alert("Deverá ser realizado o ---ARRESTO ONLINE---"+"\n"+"\n"+ "OBSERVAÇÃO: tratando-se de Empresário Individual, será necessária obrigatoriamente a inclusão do CPF na petição, além do CNPJ"+"\n"+ "\n"+"Ainda, deverão ser juntadas as fichas da Receita Federal e Jucesp junto com a Petição"+"\n"+ "\n"+"Ficha da Jucesp: quando juntada com a petição tem a finalidade de indicar o CPF do Executado"+"\n"+ "\n"+"Ficha da Receita: quando juntada com a petição, tem a finalidade de demonstrar que o(a) Executado(a) é de fato Empresário Individual")
    } else
    if (convl0 == "Não") {
        window.alert("Deverá ser verificado se no cadastro Municipal o CPF está disponível"+"\n"+"\n"+"Se o CPF/CNPJ não estiver no cadastro Municipal, será necessária a solicitação deste pela planilha de ofícios dos estagiários."+"\n"+"\n"+"Após a solicitação pela planilha de ofícios, um memorando deverá ser elaborado pelo servidor responsável, sendo que, com este memorando será possível realizar o sobrestamento do processo em razão do Memorando/PA"+"\n"+ "\n"+"O que fazer após o retorno do memorando?"+"\n"+ "\n"+"Se o memorando retornar com o CPF/CNPJ do Executado, poderá ser dado o andamento processual pertinente normalmente, caso não haja o retorno da informação solicitada, deverá ser realizada a solicitação da matrícula objeto da Execução, para que posteriormente seja realizado(a) o(a) Penhora/Arresto do Imóvel ou outra constrição cabível. Tais hipóteses estão previstas na página nº 17/21 do Manual do Estagiário")
    } else
    if (convl0 == "Sim" && convl1 == "Limitada" && convl2 == "Imobiliária" && convl3 == "AR negativo") {
        window.alert('Deverá ser verificado no site da Receita Federal e Jucesp a situação da empresa. Se esta possui novo endereço para nova Citação, se está Dissolvida etc. Página nº 11 do Manual do Estagiário.' + '\n' + '\n' + 'Se a empresa estiver como DISSOLVIDA, deverá ser verificada a data da dissolução. Se a data for posterior à data que os tributos foram constituídos, sendo que o(a) Executado(a) não os pagou, deverá ser utilizado o modelo de petição de Dissolução Irregular, redirecionando a Execução aos Sócios Administradores, que podem ser verificados na ficha da Jucesp ou quadro societário da receita federal ou cadastro municipal.' + '\n' + '\n' + "Obs: a Execução não poderá ser redirecionada aos sócios comuns, apenas aos administradores")
    } else {
        window.alert("Erro."+"\n"+"Um dos campos não foi preenchido.") // erro em razão de falta de preenchimento de alguma opção
    }
}

function abrirmanual() {
    window.open('MANUALDOESTAGIÁRIODESCOMPLICADO2024.pdf', '_blank')
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { // Verifica se a tecla pressionada é 'Enter'
        clicar(); // Chama a função clicar()
    }
});

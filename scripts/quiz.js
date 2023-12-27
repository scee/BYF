function calcularResultado() {
    // Obtém todas as opções do formulário
    var opcoes = document.getElementsByTagName('select');
    
    var simCount = 0;
    var naoCount = 0;
    var indCount = 0;
    
    // Conta a quantidade de cada opção
    for (var i = 0; i < opcoes.length; i++) {
        var opcaoSelecionada = opcoes[i].value;
        
        if (opcaoSelecionada === 'sim') {
            simCount++;
        } else if (opcaoSelecionada === 'nao') {
            naoCount++;
        } else if (opcaoSelecionada === 'ind') {
            indCount++;
        }
    }
    
    // Determina o resultado com base nas contagens
    var resultado;
    if (simCount > naoCount) {
        resultado = 'apto';
    } else if (naoCount > simCount) {
        resultado = 'não apto';
    } else if (indCount > 5) {
        resultado = 'não sabe o que quer';
    } else {
        resultado = 'indeciso';
    }
    
    // Exibe o resultado na div
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = '<p>Resultado: ' + resultado + '</p>';
}
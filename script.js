const botoes = document.querySelectorall(".like");

const contador = document.querySelector("#contador");

botoes.forEach(function(botaoClicado){
    botaoClicado("click", function(){
        const valorSelecionado = Number(botaoClicado.dataset.valor);
        contador.textContent = valorSelecionado;
        botoes.forEach(function(botalAtual){
            const valorAtual = Number(botaoAtual.dataset.valor);
            if (valorAtual <= valorSelecionado){
                botaoAtual.classList.add("ativo")
            } else {
                botaoAtual.classList.remove("ativo");
            }
        });
    });
});

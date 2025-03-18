let btnOrdenarPorPrecos = document.getElementById("btnOrdenarPorPreco");
btnOrdenarPorPrecos.addEventListener("click", ordenarLivrosPorPreco)

function ordenarLivrosPorPreco()  {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirLivrosNaTela(livrosOrdenados)
}
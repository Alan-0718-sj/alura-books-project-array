function aplicarDesconto(livros) {
    const desconto = 0.3;
    livrosComDesconto = livros.map(livro => {
        // return {...livro, preco: livro.preco * (1 - desconto)}
        return {...livro, preco: livro.preco  - (livro.preco * desconto)}
    })
    return livrosComDesconto;
}
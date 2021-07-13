const livros = require('./database')

const readline = require('readline-sync')
const entradaInicial = readline.question('Deseja buscar um livro por categoria? (S/N)')

if (entradaInicial.toLocaleUpperCase()=== 'S') {
    console.log('Categorias Disponíveis: ');
    console.log('Action', 'Biografia', 'Fiction', 'Informatica', 'Romance', 'Sociologia');

    const entradaCategoria = readline.question('Qual categoria você escolhe?\n')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria) 

    console.table(retorno)
}else{
    const livrosOrdenados = livros.sort((a,b)=> a.paginas -b.paginas)
    console.log('Essas são todos os livros disponíveis: ');
    console.table(livrosOrdenados);
}
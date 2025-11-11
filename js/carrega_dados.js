// (Req 2.c)
document.addEventListener('DOMContentLoaded', () => {
    
    const tabelaBody = document.getElementById('tabela-livros');

    // (Req 2.a) Carregar dados do JSON
    // (Req 2.b) O nome do arquivo é dados.json
    fetch('dados.json')
        .then(response => {
            if (!response.ok) {
                // Lança um erro se o arquivo não for encontrado ou houver outro problema de rede
                throw new Error(`Erro ao carregar o arquivo dados.json (Status: ${response.status})`);
            }
            return response.json();
        })
        .then(data => {
            // Verifica se o tbody existe antes de tentar preenchê-lo
            if (tabelaBody) {
                tabelaBody.innerHTML = ''; // Limpa o corpo da tabela (caso haja algum conteúdo)

                // Itera sobre cada livro no JSON
                data.forEach(livro => {
                    const row = document.createElement('tr');

                    // Cria a linha da tabela com os dados do livro
                    // (Atualizado) Adiciona a classe .book-cover na imagem
                    row.innerHTML = `
                        <td><img src="${livro.capa}" alt="Capa de ${livro.titulo}" class="book-cover"></td>
                        <td>${livro.titulo}</td>
                        <td>${livro.autor}</td>
                        <td>${livro.ano}</td>
                        <td>${livro.genero}</td>
                    `;
                    
                    tabelaBody.appendChild(row); // Adiciona a linha ao corpo da tabela
                });
            }
        })
        .catch(error => {
            // Captura erros (ex: arquivo JSON não encontrado, JSON mal formatado)
            console.error('Erro na operação de fetch:', error);
            if (tabelaBody) {
                tabelaBody.innerHTML = `<tr><td colspan="5">Não foi possível carregar os dados dos livros. Verifique o console para mais detalhes.</td></tr>`;
            }
        });
});
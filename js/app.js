/**
 * Pesquisa um conjunto de dados e exibe os resultados em uma seção HTML.
 *
 * Cada objeto tem as seguintes propriedades:
 *  - nome: O nome do jogador.
 *  - descricao: Uma breve descrição do jogador.
 *  - links: Um objeto contendo links para mais informações, com as seguintes propriedades:
 *   - instagram: O link para o perfil do jogador no Instagram.
 *   - wiki: O link para a página do jogador na Wikipédia.
 */
function pesquisar() {
    let resultadosPequisaSection = document.getElementById('resultados-pesquisa');

    let resultado = '';
    for (let dado of dados) {
        resultado += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.links.instagram}" target="_blank">${dado.nome}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.links.wiki}" target="_blank">Mais informações</a>
            </div>
        `;
    }
    
    resultadosPequisaSection.innerHTML = resultado;
}

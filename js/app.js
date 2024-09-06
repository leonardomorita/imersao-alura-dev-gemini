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
    let resultadosPesquisaSection = document.getElementById('resultados-pesquisa');
    let campoPesquisa = document.getElementById('campo-pesquisa').value;
    let resultadoNaoEncontrado = '<p>Nenhum Resultado Encontrado</p>';

    if (!campoPesquisa) {
        resultadosPesquisaSection.innerHTML = resultadoNaoEncontrado;
        return;
    }

    let resultado = '';
    for (let dado of dados) {
        if (
            !dado.nome.trim().toLowerCase().includes(campoPesquisa.trim().toLowerCase())
            && !dado.descricao.toLowerCase().trim().includes(campoPesquisa.trim().toLowerCase())
        ) continue;

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

    if (!resultado) resultado = resultadoNaoEncontrado;

    resultadosPesquisaSection.innerHTML = resultado;
}

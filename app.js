function pesquisar() {
 // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    // se o campo pesquisar for uma string nula
     if (!campoPesquisa){
    section.innerHTML = "<p>nenhuma informação foi encontrada. Você precisa digitar algo</p>"
     return}
    campoPesquisa = campoPesquisa.toLowerCase()
    
// Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
// Itera sobre cada dado da pesquisa
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
//se o titulo inclui o que foi digitado no campo pesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
 //cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                   <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                   <a href="${dado.link}" target="_blank">linkizinho</a>
            </div>`; 
    }
    }
    if (!resultados){
        resultados = "<p>Nenhuma informação foi encontrada</p>"
    }
    
// Insere os resultados na seção
    section.innerHTML = resultados;
    }


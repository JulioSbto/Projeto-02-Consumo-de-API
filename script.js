$(document).ready(function () {
    //Requisição com API
    $.ajax({
        url: "https://fabiooliveira.cloud/api_02/",
        type: "GET",
        dataType: "json",
        success: function (dados) {
            dados.forEach(function (item) {
                $("#caixa_conteudo").append(`
                    <div class='cartoes'>
                        <img src='${item.imagem}'>
                        <h2> ${item.titulo} </h2>
                        ${item.autor} | ${item.ano_publicacao} <br>
                        ${item.genero} <br>
                        ${item.disponibilidade}
                    </div>
                    <br>
                `);
            });
        },
        error: function (erro) {
            alert("Falha ao consultar");
        }
    });
}); //Fim do Ready
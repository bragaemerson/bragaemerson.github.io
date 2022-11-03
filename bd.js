var bd = openDatabase("meuBD", "1.0", "Meu Banco de dados", 4080);

bd.transaction(function (criar) {
    criar.executeSql("CREATE TABLE formularios (nome TEXT) ");
});
function salvarNome() {
    const nomeUsuario = document.getElementById("nome-usuario").value;

    bd.transaction(function (inserir) {
        inserir.executeSql("INSERT INTO formularios (nome) VALUES (?)", [
            nomeUsuario,
        ]);
    });
}

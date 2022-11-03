var bd = openDatabase("meuBD", "1.0", "Meu Banco de dados", 4080);

bd.transaction(function (criar) {
    criar.executeSql("CREATE TABLE formularios (nome TEXT , idade INTEGER) ");
});
function salvarInfo() {
    const nomeUsuario = document.getElementById("nome-usuario").value;
    const idadeUsuario = parseInt(document.getElementById("idade-usuario").value)

    bd.transaction(function (inserir) {
        inserir.executeSql("INSERT INTO formularios (nome, idade) VALUES (?, ?)", [
            nomeUsuario,idadeUsuario
        ]);
    });
}

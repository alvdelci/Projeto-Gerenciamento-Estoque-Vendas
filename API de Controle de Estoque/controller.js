const connection = require('./db/connection');
const produtos = require('./db/produtos');

module.exports = {

    home(req, res){
        res.send({msg:'API de gerenciamento de estoque -> funcionando'});
    },

    add(req, res){
        res.sendFile(__dirname + '/view/index.html')
    },

    addproduto(req, res){
        let nome = req.body.nome;
        let descricao = req.body.descricao;
        let codigo = req.body.codigo;
        let valor = req.body.valor;
        let quantidade = req.body.quantidade;


        if (nome == "" || codigo == "" || valor == "" || quantidade == ""){
            console.log("Todos os campos devem ser preenchidos!");
            res.send("Todos os campos devem ser preenchidos!");
        }else{
            connection.sync().then(() => {
                produtos.create({
                    nome: nome,
                    descricao: descricao,
                    codigo: codigo,
                    valor: valor,
                    quantidade: quantidade
                });
                res.send("Produto cadastrado!");
                console.log("Produto cadastrado!");
            }).catch((err) => {
                res.send("Falha ao cadastrar produto. Erro -> " + err);
            });
        }
    }

}
const connection = require('./db/connection');
const produtos = require('./db/produtos');

module.exports = {

    home(req, res){
        res.send({msg:'API de gerenciamento de estoque -> funcionando'});
    },

    addproduto(req, res){
        let nome = req.params.nome;
        let descricao = req.params.descricao;
        let codigo = req.params.codigo;
        let valor = req.params.valor;
        let quantidade = req.params.quantidade;

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
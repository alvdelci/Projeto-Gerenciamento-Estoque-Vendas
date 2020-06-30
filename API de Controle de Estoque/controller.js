const connection = require('./db/connection');
connection.sync();
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
            let aux = false;
            let newQuant = 0;
            let codigoAtual = "";

            produtos.findAll({
                raw: true
            }).then((productArray) => {
                if(productArray.lenght != 0){
                    productArray.forEach(produtos => {
                        if(produtos.codigo == codigo){
                            aux = true;
                            codigoAtual = produtos.codigo;
                            newQuant += parseInt(produtos.quantidade);
                        }
                    });
                }
                if(aux == true){
                    newQuant += parseInt(quantidade);
                    produtos.update({quantidade: newQuant}, {
                        where: {
                            codigo: codigoAtual
                        }
                    }).then(() => {
                        console.log("Quantidade atualizada no estoque.");
                    }).catch((err) => {
                        console.log("Erro: " + err);
                    });
                    console.log("test -> " + newQuant);
                    console.log("test2 -> " + quantidade);
                    res.send("Produto já cadastrado. Quantidade atualizada!");
                }
                else{
                    produtos.create({
                        nome: nome,
                        descricao: descricao,
                        codigo: codigo,
                        valor: valor,
                        quantidade: quantidade
                    });
                        res.send("Produto cadastrado!");
                        console.log("Produto cadastrado!");
                }
            }).catch((err) => {
                res.send("Erro -> " + err);
            });
        }
    }

}
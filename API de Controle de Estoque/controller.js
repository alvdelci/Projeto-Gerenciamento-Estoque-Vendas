const connection = require('./db/connection');
connection.sync();
const produtos = require('./db/produtos');

module.exports = {

    add(req, res){
        res.sendFile(__dirname + '/view/add.html');
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
    },

    update(req, res){
        res.sendFile(__dirname + '/view/update.html');
    },

    updateproduto(req, res){
        let search = req.body.search;
        let nome = req.body.nome;
        let descricao = req.body.descricao;
        let valor = req.body.valor;
        let quantidade = req.body.quantidade;

        produtos.findAll({
            where: {
                codigo: search
            }
        }).then((results) => {
            if(search == ""){
                res.send("Insira o código de um produto!");
            }else if(results == ""){
                res.send("Código de produto não cadastrado! Insira um código válido!");
            }else{
                if(nome == "" || descricao == "" || valor == "" || quantidade == ""){
                    res.send("Preencha todos os campos!");
                }else{
                    produtos.update({
                        nome: nome,
                        descricao: descricao,
                        valor: valor,
                        quantidade: quantidade
                    }, 
                    {
                        where: {
                            codigo: search
                        }
                    }).then(() => {
                        res.send("Informações atualizadas com sucesso!");
                    }).catch((err) => {
                        res.send("Erro ao atualizar. Erro: " + err);
                    });
                    
                }
            }
        }).catch((err) => {
            res.send("Erro -> " + err);
        });
    },

    remove(req, res){
        res.sendFile(__dirname + '/view/remove.html');
    },

    removeproduto(req, res){
        let codRemove = req.body.search;

        produtos.findOne({
            where: {codigo: codRemove}
        }).then((results) => {
            if(results == null){
                res.send("Código de produto não encontrado.");
            }else{
                produtos.destroy({
                    where: {codigo:codRemove}
                }).then(() => {
                    res.send("Produto removido");
                }).catch((err) => {
                    res.send("Falha ao remover produto. Erro: " + err);
                });
            }
        }).catch((err) => {
            console.log("Erro: " + err);
        });
    }

}
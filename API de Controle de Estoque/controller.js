const connection = require('./db/connection');
connection.sync();//Cria as tabelas automaticamente assim que o sistema é inicializado. Isso para que as funções de consultas possam ser executadas
const produtos = require('./db/produtos');

module.exports = {
    //Exibe a tela inicial com menu de opções que redireciona para as telas de ações do estoque
    home(req, res){
        res.sendFile(__dirname + '/view/home.html');
    },
    //Exibe a tela de cadastro de novos produtos
    add(req, res){
        res.sendFile(__dirname + '/view/add.html');
    },
    //Funções de cadastro de novos produtos. Atualiza a quantidade caso o produto ja exista
    addproduto(req, res){
        //Dados de entrada obtidos atraves do formulario html
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
            //Busca todos os produtos cadastrados
            produtos.findAll({
                raw: true
            }).then((productArray) => {//retorna uma array com os produtos cadastrados no banco de dados
                if(productArray.lenght != 0){           //Se houver produtos cadastrados
                    productArray.forEach(produtos => {  //Toda a array será percorrida afim de coletar algumas informações:
                        if(produtos.codigo == codigo){
                            aux = true;                     //Se o código do produto Estiver cadastrado
                            codigoAtual = produtos.codigo;  //Esse código será armazenado
                            newQuant += parseInt(produtos.quantidade); //E a quantidade cadastrada no estoque será somada a nova quantidade.
                        }
                    });
                }
                if(aux == true){
                    newQuant += parseInt(quantidade);
                    produtos.update({quantidade: newQuant}, {//É feito o update apenas da quantidade, as outras informações do produto são mantidas
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
                else{ //Se o código do produto ainda não estiver cadastrado, o novo produto será adicionada
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
    //Exibe a tela de atualização de informações do produto
    update(req, res){
        res.sendFile(__dirname + '/view/update.html');
    },
    //Funções de atualização de informações do produto. Atualiza todas as informações de uma vez. Tendo como entrada o código do produto e as novas informações
    updateproduto(req, res){
        //Dados de entrada obtidos atraves do formulario html
        let search = req.body.search; //Código do produto que será atualizado
        let nome = req.body.nome;
        let descricao = req.body.descricao;
        let valor = req.body.valor;
        let quantidade = req.body.quantidade;
        
        //busca por todos os produtos cadastrados cujo código é o mesmo que o informado no formulario html
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
                    produtos.update({//Faz update de todas as informações do produto, exceto o código
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
    //Exibe a tela de remoção de produtos
    remove(req, res){
        res.sendFile(__dirname + '/view/remove.html');
    },
    //Funções de remoção de produtos. Remove através do código do produto apenas
    removeproduto(req, res){
        //Código do produto que deseja-se alterar as informações, obtido atraves do formulario html
        let codRemove = req.body.search;
        //Busca apenas o produto cujo código é o mesmo que o informado na entrada de dados
        produtos.findOne({
            where: {codigo: codRemove}
        }).then((results) => {
            if(results == null){
                res.send("Código de produto não encontrado.");
            }else{
                produtos.destroy({ //Remove todas as informações do produto cujo código é o mesmo que o informado para remoção
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
    },
    //Exibe a tela de busca por produtos
    view(req, res){
        res.sendFile(__dirname + '/view/view.html');
    },
    //Funções para visualização de informações de produtos. Retorna um json com as informações referentes do produto que foi pesquisado pelo nome
    viewproduto(req, res){
        let nome = req.body.nome;
        //Busca 
        produtos.findAll({
            where: {nome: nome}
        }).then((results) => {
            if(results == null){
                res.send("Produto não encontrado!");
            }else{
                res.send(results);
            }
        }).catch((err) => {
            res.send("Erro: " + err);
        });
    }

}
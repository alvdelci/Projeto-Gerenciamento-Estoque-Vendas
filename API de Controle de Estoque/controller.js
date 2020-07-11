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
            //Busca todos os produtos cadastrados
            produtos.findAll({
                raw: true
            }).then((productArray) => {//retorna uma array com os produtos cadastrados no banco de dados
                if(productArray.lenght != 0){           //Se houver produtos cadastrados
                    productArray.forEach(produtos => {  //Toda a array será percorrida afim de coletar algumas informações:
                        if(produtos.codigo == codigo){
                            aux = true;
                        }
                    });
                }
                if(aux == true){
                    res.send("Código ja cadastrado. Se deseja adicionar produtos ao estoque acesse as *Atualizar produtos*");
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
    //Atualiza o nome do produto
    updatenome(req, res){
        //Dados de entrada obtidos atraves do formulario html
        let search = req.body.search; //Código do produto que será atualizado
        let nome = req.body.nome;

        //busca por todos os produtos cadastrados cujo código é o mesmo que o informado no formulario html
        produtos.findAll({
            where: {
                codigo: search
            }
        }).then((results) => {
            if(search == ""){
                res.send("Insira o código de um produto!");
            }else if(results == ""){
                res.send({found: false});//Resposta para comunicação com a APP do React
            }else{
                if(nome == ""){
                    res.send("Preencha todos os campos!");
                }else{
                    produtos.update({//Faz update de todas as informações do produto, exceto o código
                        nome: nome,
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
    //Atualiza a descrição do produto
    updatedescricao(req, res){
        //Dados de entrada obtidos atraves do formulario html
        let search = req.body.search; //Código do produto que será atualizado
        let descricao = req.body.descricao;

        //busca por todos os produtos cadastrados cujo código é o mesmo que o informado no formulario html
        produtos.findAll({
            where: {
                codigo: search
            }
        }).then((results) => {
            if(search == ""){
                res.send("Insira o código de um produto!");
            }else if(results == ""){
                res.send({found: false});//Resposta para comunicação com a APP do React
            }else{
                if(descricao == ""){
                    res.send("Preencha todos os campos!");
                }else{
                    produtos.update({//Faz update de todas as informações do produto, exceto o código
                        descricao: descricao,
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
    //Atualiza o preço do produto
    updatevalor(req, res){
        //Dados de entrada obtidos atraves do formulario html
        let search = req.body.search; //Código do produto que será atualizado
        let valor = req.body.valor;

        //busca por todos os produtos cadastrados cujo código é o mesmo que o informado no formulario html
        produtos.findAll({
            where: {
                codigo: search
            }
        }).then((results) => {
            if(search == ""){
                res.send("Insira o código de um produto!");
            }else if(results == ""){
                res.send({found: false});//Resposta para comunicação com a APP do React
            }else{
                if(valor == ""){
                    res.send("Preencha todos os campos!");
                }else{
                    produtos.update({//Faz update de todas as informações do produto, exceto o código
                        valor: valor,
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
    //Atualiza a quantidade de produtos
    updatequantidade(req, res){
        //Dados de entrada obtidos atraves do formulario html
        let search = req.body.search; //Código do produto que será atualizado
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
                res.send({found: false});//Resposta para comunicação com a APP do React
            }else{
                if(quantidade == ""){
                    res.send("Preencha todos os campos!");
                }else{
                  let newQuant = parseInt(quantidade) + parseInt(results[0].quantidade);
                    produtos.update({//Faz update de todas as informações do produto, exceto o código
                        quantidade: newQuant,
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
                res.send({found: false});//Resposta para comunicação com a APP do React
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
          if(nome == ""){
              res.send("Insira o nome de um produto!");
          }
            else if(results == ""){
                res.send({found: false});
                console.log("Dados não conferem.")
            }else{
                res.send(results);
            }
        }).catch((err) => {
            res.send("Erro: " + err);
        });
    }

}

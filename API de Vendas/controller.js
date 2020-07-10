const connection = require('./db/connection');
connection.sync();
const produtos = require('./db/produtos');


module.exports = {

  vendas(req, res){
    res.sendFile(__dirname + '/view/index.html');
  },

  comprar(req, res){

      const cod = req.body.codigo;
      const qusers = req.body.quantidade;

      produtos.findOne({ //Busca no banco de dados o código digitado
        where: {codigo: cod}

      }).then((produto) =>{
        if (qusers == "" || qusers == 0 ) { //Validação da quantidade requisitada pelo usuário
          res.send("Informe uma quantidade.")
        }
        else if (qusers > 10 ) {//Restrição da quantidade na compra de 1 até 10 produtos.
          res.send("Só é possível comprar no máximo 10 produtos por vez.")
        }
        else {

          const qexist = produto.quantidade; //Quantidade do produto no estoque (banco de dados)
          console.log (qexist);

              const qfinal = qexist - qusers; //Diminui a quantidade existente no estoque pela quantidade requisitada pelo usuário

                if (qexist == 0) { //Observa se no banco de dados ainda tem o produto
                  res.send("Produto Esgotado.");
                }
                else if (qfinal < 0) {
                  res.send("Quantidade insuficiente no estoque, restam apenas "  + qexist + " produto(s)");
                }
                else if (qfinal >= 0) {
                  produtos.update({//Faz update da quantidade final do produto no banco de dados
                      quantidade: qfinal
                  },
                  {
                      where: {
                          codigo: cod
                      }
                  }).then(() => {
                      res.send("Compra realizada com sucesso!");
                  }).catch((err) => {
                      res.send("Erro ao realizar a compra. Erro: " + err);
                  });
                }
        }
      }) .catch((err) => {
          res.send("Erro: " + err);
      });
  },

  exibir(req, res){

    //Busca os dados de 
    produtos.findAll({
      attributes: ['nome','descricao', 'codigo', 'valor'] //É apenas exibido essas colunas

    }).then((results) => {
      res.send(results);

    }).catch((err) => {
        res.send("Erro: " + err);
    });
  }
}

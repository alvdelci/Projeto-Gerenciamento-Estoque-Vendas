import React from 'react';
import './vendas.css';
import axios from 'axios';
import { useState } from 'react';


function Vendas(){

        let [codigo, setCodigo] = useState("");
        let [quantidade, setQuantidade] = useState("");
        let [repos, setRepos ] = useState ([]);

        async function comprar(){

          await axios.post(`http://localhost:3003/comprar`, {
            codigo: codigo,
            quantidade: quantidade

          }).then((body) => {

              if (quantidade == "" && quantidade == 0 && codigo == "") {//Validação dos campos de quantidade e código
                alert("Informe um código e uma quantidade.")
              }
              else if (quantidade == "" || quantidade == 0) { //Validação da quantidade requisitada pelo usuário
                alert("Informe uma quantidade.")
              }
              else if (codigo == "") {//Validação do espaço do código
                alert("Informe um código.")
              }
              else if (quantidade > 10 ) {//Restrição da quantidade na compra de 1 até 10 produtos.
                alert("Só é possível comprar no máximo 10 produtos por vez.")
              }
              else if (body == null) {//Validação do código requisitado pelo usuário
                alert("Produto não encontrado.")
              }
              else{
                setCodigo(body.data.codigo);
                setQuantidade(body.data.quantidade);
                alert("Compra realizada com sucesso!");
              }
          }).catch((err) => {
            console.log("Erro: " + err);
          });

        };

        async function exibir(){

          await axios.post(`http://localhost:3003/exibir`, {

          }).then ( (body) => {
            console.log(body);
            setRepos(body.data);
          })
          .catch ( (err) => {
            console.log(err);
          })

        };


    return(<>
        <header>
            <h1>Compra de Produtos</h1>
        </header>
        <div>
            <div id="box">
                <label>Código</label><br/>
                <input type="text" name="codigo" value={codigo} onChange={(e) => {setCodigo(e.target.value)}} placeholder="Insira o código do produto"/><br/>

                <label>Quantidade</label><br/>
                <input type="number" name="quantidade" value={quantidade} onChange={(e) => {setQuantidade(e.target.value)}} placeholder="Insira a quantidade (1 - 10)"/><br/>

                <input id="submit" type="submit" onClick={comprar} value="Comprar"/><br/>
                <input id="submit" type="submit" onClick={exibir} value="Catálogo"/>
            </div>
            <div className="Repo">
              <ul>
                {repos.map((element) => {return (
                <li key={element.id}>
                  <h5> Nome: {element.nome}  </h5>
                  <h5> Descrição: {element.descricao} </h5>
                  <h5> Código: {element.codigo} </h5>
                  <h5> Preço: R$ {element.valor} </h5>
                </li>
                ) } ) }
              </ul>
            </div>
        </div>
    </>);
}

export default Vendas;

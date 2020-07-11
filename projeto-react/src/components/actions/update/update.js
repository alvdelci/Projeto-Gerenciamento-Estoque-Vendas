import React from 'react';
import './update.css';
import axios from 'axios';
import { useState } from 'react';


function Update(){

        let [codigo, setCodigo] = useState("");
        let [quantidade, setQuantidade] = useState("");
        let [repos, setRepos ] = useState ([]);

        async function update(){

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



    return(
      <div>
        <header>
            <h1>Atualização de Produto</h1>
            <h3>*Apenas um por vez*</h3>
        </header>
        <div id="main1">
          <div class="add-box">
              <form action="/updatenome" method="POST">
                <div style="text-align: center;">
                  <h4 style="margin-bottom: 0;">Informe o código do produto</h4>
                  <input style="text-align: center;" type="text" name="search"/>
                </div>

                <h4>Insira o novo nome do produto. </h4>
                <label> Novo Nome </label>
                <input type="text" name="nome"/>

                <input id="submit" type="submit" value="Atualizar"/>
              </form>
          </div>
          <div class="add-box">
              <form action="/updatedescricao" method="POST">
              <div style="text-align: center;">
                  <h4 style="margin-bottom: 0;">Informe o código do produto</h4>
                  <input style="text-align: center;" type="text" name="search"/>
              </div>

              <h4>Insira a nova descrição do produto.</h4>
              <label>Nova Descrição</label>
              <input type="text" name="descricao"/>

              <input id="submit" type="submit" value="Atualizar"/>
              </form>
          </div>
        </div>
        <div id="main2">
            <div class="add-box">
                <form action="/updatevalor" method="post">
                    <div style="text-align: center;">
                        <h4 style="margin-bottom: 0;">Informe o código do produto</h4>
                        <input style="text-align: center;" type="text" name="search"/>
                    </div>

                    <h4>Insira o novo preço do produto.</h4>
                    <label>Novo Preço</label>
                    <input type="number" step="0.01" name="valor"/>

                    <input id="submit" type="submit" value="Atualizar"/>
                </form>
            </div>
            <div class="add-box">
                <form action="/updatequantidade" method="post">
                    <div style="text-align: center;">
                        <h4 style="margin-bottom: 0;">Informe o código do produto</h4>

                        <input style="text-align: center;" type="text" name="search"/>
                    </div>

                    <h4>Insira a quantidade a ser adicionada.</h4>
                    <label>Quantidade</label>
                    <input type="number" name="quantidade" placeholder="Qnt. será somada a do estoque"/>

                    <input id="submit" type="submit" value="Atualizar"/>
                </form>
            </div>
        </div>
    </div>
    );
}

export default Update;

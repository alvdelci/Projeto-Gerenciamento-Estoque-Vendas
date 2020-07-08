import React from 'react';
import './vendas.css';
import axios from 'axios';
import { useState } from 'react';


function Vendas(){

        let [codigo, setCodigo] = useState("");
        let [quantidade, setQuantidade] = useState("");
      
        async function comprar(){
          await axios.post(`http://localhost:3003/comprar`, {
            codigo: codigo,
            quantidade: quantidade
          }).then((body) => {
            if(codigo === "" || quantidade === ""){
                alert("Todos os campos devem ser preenchidos!");
            }
            else if(quantidade > 10){
                alert("Só é possível comprar até 10 produtos por vez!");
            }
            else{
                setCodigo(body.data.codigo);
                setQuantidade(body.data.quantidade);
                alert("Compra realizada com sucesso!");
            }
          }).catch((err) => {
            console.log("Erro: " + err);
          });
        }
    
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

                <input id="submit" type="submit" onClick={comprar} value="Comprar"/>
            </div>
        </div>
    </>);
}

export default Vendas;
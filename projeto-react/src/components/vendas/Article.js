import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Card, CardText, CardTitle, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Col, Row } from 'reactstrap';
import axios from 'axios';
import { useState } from 'react';
import './App.css';


const Article = (props) => {

  let [codigo, setCodigo] = useState("");
  let [quantidade, setQuantidade] = useState("");
  let [repos, setRepos ] = useState ([]);

  async function comprar(){

    await axios.post(`http://localhost:3003/comprar`, {
      codigo: codigo,
      quantidade: quantidade

    }).then((body) => {

        if (quantidade === "" || codigo === "") {//Validação dos campos de quantidade e código
          alert("Preencha os campos!")
        }
        else if (body.data.authent === "void") { //Validação da quantidade requisitada pelo usuário
          alert("Informe uma quantidade.")
        }
        else if (body.data.authent === false ) {//Restrição da quantidade na compra de 1 até 10 produtos.
          alert("Só é possível comprar no máximo 10 produtos por vez.")
        }
        else if (body.data.found === false) {//Validação do código requisitado pelo usuário
          alert("Produto não encontrado.")
        }else if (body.data.authent === "empty") {
          alert("Produto Esgotado.")
        }else if (body.data.authent === "insuficiente") {
          alert("Quantidade insuficiente no estoque")
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

  return (
    <div className="corpo ">
      <Jumbotron fluid className="jum bg-dark">
        <Container>
          <Row>
            <Col sm="6">
              <Card body className="options bg-info col-" >
                <CardTitle>Comprar</CardTitle>
                <CardText>
                  <Form>
                    <FormGroup>
                    <Label for="form">Código</Label>
                      <Input className="input" type="text" name="code" id="code" value={codigo} onChange={(e) => {setCodigo(e.target.value)}} placeholder="Insira o código" />
                    </FormGroup>
                    <FormGroup>
                    <Label for="form">Quantidade</Label>
                      <Input className="input" type="number" name="quant" id="quant" value={quantidade} onChange={(e) => {setQuantidade(e.target.value)}} placeholder="Insira a quantidade (1-10)" />
                    </FormGroup>
                    <FormGroup>
                    <Button className="button" onClick={comprar}>Comprar</Button>
                    </FormGroup>
                    <FormGroup>
                    <Button className="button" onClick={exibir} >Catálogo</Button>
                    </FormGroup>
                  </Form>
                </CardText>

              </Card>

            </Col>
            <Col sm="6">
              <Card body className="options bg-info col-" >
                <CardTitle>Produtos</CardTitle>
                <CardText>
                  <Form>
                    <div clasName="Repo">

                        {repos.map((element) =>{return (
                        <p key={element.id}>

                        <h4>{element.nome}</h4>
                        <li>Descrição: {element.descricao}</li>
                        <li>Código: {element.codigo}</li>
                        <li>Preço: R${element.valor}</li>
                        </p>
                        )} )}

                    </div>

                  </Form>
                </CardText>
              </Card>
            </Col>

          </Row>
        </Container>



      </Jumbotron>
    </div>
  );
};

export default Article;

import React from 'react';
import { CardBody, Button, Jumbotron, Container, Form, FormGroup, Label, Input } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';

import './App.css';

const Article = (props) => {
  let [ nome, setNome ] = useState("");
  let [ descricao, setDescricao ] = useState("");
  let [ codigo, setCodigo ] = useState("");
  let [ valor, setValor ] = useState("");
  let [ quantidade, setQuantidade ] = useState("");

  async function cadastrar() {
    await axios.post(`http://localhost:3002/addproduto`, {
      nome: nome,
      descricao: descricao,
      codigo: codigo,
      valor: valor,
      quantidade: quantidade
    }).then((body) => {
      setNome(nome);
      setDescricao(descricao);
      setCodigo(codigo);
      setValor(valor);
      setQuantidade(quantidade);

      if (nome === "" || codigo === "" || valor === "" || quantidade === "") {
        alert("Preencha todos os campos!");
      }
      else if (body.data.exists === true) {
        alert("Código de produto ja está cadastrado!");
      }
      else {
        alert("Produto cadastrado com sucesso!");
      }

    });
  }

  return (
    <div>
      <Jumbotron fluid className="jum bg-dark ">
        <Container fluid className="cont">
          <div>
            <CardBody className="card-body bg-info">
              <Form className="form " type="card">
                <FormGroup>
                  <Label for="Name">Nome do Produto:</Label>
                  <Input className="input" type="text" name="name" value={nome} onChange={(e) => { setNome(e.target.value) }} placeholder="Insira o nome " />
                </FormGroup>
                <FormGroup>
                  <Label for="Description">Descrição:</Label>
                  <Input className="input" type="text" name="description" value={descricao} onChange={(e) => { setDescricao(e.target.value) }} placeholder="descreva o produto" />
                </FormGroup>
                <FormGroup>
                  <Label for="Code">Código:</Label>
                  <Input className="input" type="text" name="code" value={codigo} onChange={(e) => { setCodigo(e.target.value) }} placeholder="Insira o código" />
                </FormGroup>
                <FormGroup>
                  <Label for="Price">Preço:</Label>
                  <Input className="input" type="number" step="0.01" name="price" value={valor} onChange={(e) => { setValor(e.target.value) }} placeholder="Insria o preço" />
                </FormGroup>
                <FormGroup>
                  <Label for="Quant">Quantidade:</Label>
                  <Input className="input" type="number" name="quant" value={quantidade} onChange={(e) => { setQuantidade(e.target.value) }} placeholder="Insira a quantidade" />
                </FormGroup>
                <Button className="button" onClick={cadastrar}>Cadastrar</Button>
              </Form>
            </CardBody>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Article;

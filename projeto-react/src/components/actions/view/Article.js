import React from 'react';
import { useState } from 'react';
import { Card, CardText, CardTitle, Button, Form, FormGroup, Label, Input, Jumbotron, Container, Col, Row } from 'reactstrap';
import axios from 'axios';

import '../../../App.css';


function Article () {
  let [search, setSearch] = useState("");
  let [nome, setNome] = useState("");
  let [descricao, setDescricao] = useState("");
  let [codigo, setCodigo] = useState("");
  let [valor, setValor] = useState("");
  let [quantidade, setQuantidade] = useState("");

  async function buscar() {
    await axios.post(`http://localhost:3002/viewproduto`, {
      nome: search
    }).then((body) => {
      console.log(body);
      if (search === "") {
        alert("Preencha o campo!");
      }
      else if (body.data.found === false) {
        alert("Produto não encontrado!");
      }
      setNome(body.data.nome);
      setDescricao(body.data.descricao);
      setCodigo(body.data.codigo);
      setValor(body.data.valor);
      setQuantidade(body.data.quantidade);
    });
  }

  return (
    <div className="corpo ">
      <Jumbotron fluid className="jum bg-dark">
        <Container>
          <Row>
            <Col sm="6">
              <Card body className="options bg-info col-" >
                <CardTitle>Buscar produtos pelo Nome:</CardTitle>
                <CardText>
                  <div>
                    <FormGroup>
                      <Input className="input" type="text" name="name" value={search} onChange={(e) => (setSearch(e.target.value))} placeholder="Insira o nome" />
                    </FormGroup>
                  </div>
                </CardText>
                <Button className="button" onClick={buscar}>Pesquisar</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body className="options bg-info col-" >
                <CardTitle>Resultado:</CardTitle>
                <CardText>
                  <div>
                    <div>
                      <Label>Nome</Label>
                      <Input className="input"  name="name" value={nome} />
                    </div>
                    <div>
                      <Label>Descrição:</Label>
                      <Input className="input" disabled name="description" value={descricao} />
                    </div>
                    <div>
                      <Label>Código:</Label>
                      <Input className="input" disabled name="code" value={codigo} />
                    </div>
                    <div>
                      <Label>Quantidade:</Label>
                      <Input className="input" disabled name="quant" value={quantidade} />
                    </div>
                    <div>
                      <Label>Valor:</Label>
                      <Input className="input" disabled name="price" value={valor} />
                    </div>
                  </div>
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
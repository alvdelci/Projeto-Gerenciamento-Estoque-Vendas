import React from 'react';
import { useState } from 'react';
import { Card, CardText, CardTitle, Button, Form, FormGroup, Label, Input, Jumbotron, Container, Col, Row } from 'reactstrap';
import axios from 'axios';

import './App.css';


function Article() {
  let [search, setSearch] = useState("");
  let [nome, setNome] = useState("");
  let [repos, setRepos] = useState([]);

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
      } else {
        setRepos(body.data);
      }
      setNome(body.data.nome);

    });
  }

  return (
    <div className="corpo ">
      <Jumbotron fluid className="jum bg-dark">
        <Container>
          <Row>
            <Col sm="6">
              <Card body className="options bg-info" >
                <CardTitle>Buscar produtos pelo Nome</CardTitle>
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
                <Card body className="options bg-info" >
                  <CardTitle>Produtos</CardTitle>
                  <CardText>
                    <Form>
                      <div clasName="Repo">
                        {repos.map((element) => {
                          return (
                            <p key={element.id}>

                              <h4>{element.nome}</h4>
                              <li>Descrição: {element.descricao}</li>
                              <li>Código: {element.codigo}</li>
                              <li>Preço: R${element.valor}</li>
                              <li>Estoque: {element.quantidade}</li>
                            </p>
                          )
                        })}
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

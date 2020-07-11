import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Card, CardText, CardTitle, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Col, Row } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';
import './App.css';


const Article = (props) => {

  let [codigon, setCodigon] = useState(""); //Código do update name
  let [codigod, setCodigod] = useState("");//Código do update description
  let [codigop, setCodigop] = useState("");//Código do update price
  let [codigoqt, setCodigoqt] = useState("");//Código do update quantity
  let [nome, setNome] = useState("");
  let [descricao, setDescricao] = useState("");
  let [valor, setValor] = useState("");
  let [quantidade, setQuantidade] = useState("");

  async function name() { //Atualizar o Nome
      await axios.post(`http://localhost:3002/updatenome`, {
          search: codigon,
          nome: nome
      })
      .then((body) => {
        setCodigon(codigon);
        setNome (nome);
          if (codigon === "" && nome === "") {
              alert("Preencha todos os campos!");
          } else if(codigon === ""){
              alert("Insira o código de um produto!");
          }else if (nome === "") {
              alert("Insira o novo nome do produto!");
          } else if(body.data.found === false){
              alert("Código de produto não cadastrado! Insira um código válido!");
          }
          else {
              alert("Nome atualizado com sucesso!")
          }
        }).catch((err) => {
            alert("Erro -> " + err);
        });
  };// Fim de Atualizar o Nome

  async function description(){ //Atualizar a Descrição
    await axios.post(`http://localhost:3002/updatedescricao`, {
        search: codigod,
        descricao: descricao
    })
    .then((body) => {
      setCodigod(codigod);
      setDescricao(descricao);
        if (codigod === "" && descricao === "") {
            alert("Preencha todos os campos!");
        } else if(codigod === ""){
            alert("Insira o código de um produto!");
        }else if (descricao === "") {
            alert("Insira a nova descrição do produto!");
        } else if(body.data.found === false){
            alert("Código de produto não cadastrado! Insira um código válido!");
        }
        else {
            alert("Descrição atualizada com sucesso!")
        }
      }).catch((err) => {
          alert("Erro -> " + err);
      });

  }; //Fim de Atualizar a Descrição

  async function price(){ //Atualizar o Preço
    await axios.post(`http://localhost:3002/updatevalor`, {
        search: codigop,
        valor: valor
    })
    .then((body) => {
      setCodigop(codigop);
      setValor(valor);
        if (codigop === "" && valor === "") {
            alert("Preencha todos os campos!");
        } else if(codigop === ""){
            alert("Insira o código de um produto!");
        }else if (valor === "") {
            alert("Insira o novo preço do produto!");
        } else if(body.data.found === false){
            alert("Código de produto não cadastrado! Insira um código válido!");
        }
        else {
            alert("Preço atualizado com sucesso!")
        }
      }).catch((err) => {
          alert("Erro -> " + err);
      });

  };//Fim de Atualizar o Preço

  async function quantity(){ //Atualizar a Quantidade
    await axios.post(`http://localhost:3002/updatequantidade`, {
        search: codigoqt,
        quantidade: quantidade
    })
    .then((body) => {
      setCodigoqt(codigoqt);
      setQuantidade(quantidade);
        if (codigoqt === "" && quantidade === "") {
            alert("Preencha todos os campos!");
        } else if(codigoqt === ""){
            alert("Insira o código de um produto!");
        }else if (quantidade === "") {
            alert("Insira a quantidade a ser adicionada!");
        } else if(body.data.found === false){
            alert("Código de produto não cadastrado! Insira um código válido!");
        }
        else {
            alert("Quantidade atualizada com sucesso!")
        }
      }).catch((err) => {
          alert("Erro -> " + err);
      });

  };//Fim de Atualizar a Quantidade

  return (
    <div className="corpo ">
      <Jumbotron fluid className="jum bg-dark">
       <Container>
        <Row>
          <Col sm="6">
            <Card body className="options bg-info col-" >
              <CardTitle>Novo Nome:</CardTitle>
              <CardText>
                <Form>
                  <FormGroup>
                    <Label for="form">Código</Label>
                    <Input className="input" type="text" name="code" id="code" value={codigon} onChange={(e) => { setCodigon(e.target.value) }}  placeholder="Insira o código" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="form">Nome:</Label>
                    <Input className="input" type="text" name="name" id="name" value={nome} onChange={(e) => { setNome(e.target.value) }}  placeholder="Insira o novo nome" />
                  </FormGroup>
                </Form>
              </CardText>
              <Button className="button" onClick={name}>Atualizar</Button>
            </Card>
          </Col>
          <Col sm="6">
            <Card body className="options bg-info col-" >
              <CardTitle>Nova Descrição:</CardTitle>
              <CardText>
                <Form>
                  <FormGroup>
                    <Label for="form">Código</Label>
                    <Input className="input" type="text" name="code" id="code" value={codigod} onChange={(e) => { setCodigod(e.target.value) }} placeholder="Insira o código" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="form">Descrição:</Label>
                    <Input className="input" type="text" name="name" id="name" value={descricao} onChange={(e) => { setDescricao(e.target.value) }} placeholder="Insira a nova descrição" />
                  </FormGroup>
                </Form>
              </CardText>
              <Button className="button" onClick={description}>Atualizar</Button>
            </Card>
          </Col>
          <Col className="baixo" sm="6">
            <Card body className="options bg-info col-" >
              <CardTitle>Novo Preço:</CardTitle>
              <CardText>
                <Form>
                  <FormGroup>
                    <Label for="form">Código</Label>
                    <Input className="input" type="text" name="code" id="code" value={codigop} onChange={(e) => { setCodigop(e.target.value) }} placeholder="Insira o código" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="form">Preço:</Label>
                    <Input className="input" type="number" name="price" id="price" value={valor} onChange={(e) => { setValor(e.target.value) }} placeholder="Insira o novo preço" />
                  </FormGroup>
                </Form>
              </CardText>
              <Button className="button" onClick={price}>Atualizar</Button>
            </Card>
          </Col>
          <Col className="baixo" sm="6">
            <Card body className="options bg-info col-" >
              <CardTitle>Nova Quantidade:</CardTitle>
              <CardText>
                <Form>
                  <FormGroup>
                    <Label for="form">Código</Label>
                    <Input className="input" type="text" name="code" id="code" value={codigoqt} onChange={(e) => { setCodigoqt(e.target.value) }} placeholder="Insira o código" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="form">Quantidade:</Label>
                    <Input className="input" type="number" name="price" id="price" value={quantidade} onChange={(e) => { setQuantidade(e.target.value) }} placeholder="Qnt. será somada a do estoque" />
                  </FormGroup>
                </Form>
              </CardText>
              <Button className="button" onClick={quantity}>Atualizar</Button>
            </Card>
          </Col>
        </Row>
       </Container>



      </Jumbotron>
    </div>
  );
};

export default Article;

import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Card, CardText, CardTitle, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Col, Row } from 'reactstrap';
import '../../App.css';


const Article = (props) => {
  return (
    <div className="corpo ">
      <Jumbotron fluid className="jum bg-dark">
        <Container>
          <Row>
            <Col sm="6">
              <Card body className="options bg-info col-" >
                <CardTitle>Comprar:</CardTitle>
                <CardText>
                  <Form>
                    <FormGroup>
                      <Label for="form">Código:</Label>
                      <Input className="input" type="text" name="code" id="code" placeholder="insira o nome" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="form">Quantidade:</Label>
                      <Input className="input" type="text" name="quant" id="quant" placeholder="insira o nome" />
                    </FormGroup>
                    <FormGroup>
                      <Button className="button">Pesquisar</Button>
                    </FormGroup>
                    <FormGroup>
                      <Button className="button">Catálogo</Button>
                    </FormGroup>
                  </Form>
                </CardText>

              </Card>

            </Col>
            <Col sm="6">
              <Card body className="options bg-info col-" >
                <CardTitle>Produto:</CardTitle>
                <CardText>
                  <Form>
                    {/* //abre comentário
                    <div clasName="Repo">
                      <ul>
                        {Response.map((element) =>{return (     
                        <li key={element.id}>
                        
                        <label>Nome: {element.id}</label>
                        <label>Descrição:{element.descricao}</label>
                        <label>Código:{element.codigo}</label>
                        <label>Preço: R$ {element.valor}</label>
                        </li>
                        
                        )} )}







                      </ul>
                    </div>
                     //fecha comentário    */  }
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
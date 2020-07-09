import React from 'react';
import { Jumbotron, Container, Card, CardText, CardTitle, Button, Col, Row } from 'reactstrap';

import '../../App.css';


const Article = (props) => {
    return (
        <div className="corpo ">
            <Jumbotron fluid className="jum bg-dark">

                <Container>
                <Row>
                    <Col sm="6">
                        <Card body className="options bg-info col-" >
                            <img top width="100%" src="/assets/estoque.jpg" alt="Card image cap" />
                            <CardTitle>Adicionar Produtos</CardTitle>
                            <CardText>Adicione os produtos no estoque</CardText>
                            <Button link href="/addproduto" method="GET" className="button">Acessar</Button>
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card body className="options bg-info col-">
                            <img top width="100%" src="/assets/remover.jpg" alt="Card image cap" />
                            <CardTitle>Remover Produtos</CardTitle>
                            <CardText>Remova Produtos do seu estoque</CardText>
                            <Button link href="/removeproduto" className="button">Acessar</Button>
                        </Card>
                    </Col>
                    <Col className="baixo" sm="6">
                        <Card body className="options bg-info col-" >
                            <img top width="100%" src="/assets/atualizar.jpeg" alt="Card image cap" />
                            <CardTitle>Atualizar Produtos</CardTitle>
                            <CardText>Atualize os produtos do seus estoque</CardText>
                            <Button link href="/updateprodutos" className="button" >Acessar</Button>
                        </Card>
                    </Col>
                    <Col className="baixo" sm="6">
                        <Card body className="options bg-info col-" >
                            <img top width="100%" src="/assets/lupa.jpg" alt="Card image cap" />
                            <CardTitle>Buscar Produtos</CardTitle>
                            <CardText>Pesquise algum produto no estoque</CardText>
                            <Button link href="/searchprodutos" className="button" >Acessar</Button>
                        </Card>
                    </Col>
                </Row>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Article;
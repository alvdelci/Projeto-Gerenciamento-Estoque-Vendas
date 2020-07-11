import React from 'react';
import { Jumbotron, Container, Card, CardText, CardTitle, Button, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom'
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
                                <Link to="/add">
                                    <Button className="button">Acessar</Button>
                                </Link>
                            </Card>
                        </Col>
                        <Col sm="6">
                            <Card body className="options bg-info col-">
                                <img top width="100%" src="/assets/remover.jpg" alt="Card image cap" />
                                <CardTitle>Remover Produtos</CardTitle>
                                <CardText>Remova Produtos do seu estoque</CardText>
                                <Link to="/remove">
                                    <Button className="button">Acessar</Button>
                                </Link>
                            </Card>
                        </Col>
                        <Col className="baixo" sm="6">
                            <Card body className="options bg-info col-" >
                                <img top width="100%" src="/assets/atualizar.jpeg" alt="Card image cap" />
                                <CardTitle>Atualizar Produtos</CardTitle>
                                <CardText>Atualize os produtos do seus estoque</CardText>
                                <Link to="/update">
                                    <Button className="button">Acessar</Button>
                                </Link>
                            </Card>
                        </Col>
                        <Col className="baixo" sm="6">
                            <Card body className="options bg-info col-" >
                                <img top width="100%" src="/assets/lupa.jpg" alt="Card image cap" />
                                <CardTitle>Buscar Produtos</CardTitle>
                                <CardText>Pesquise algum produto no estoque</CardText>
                                <Link to="/view">
                                    <Button className="button">Acessar</Button>
                                </Link>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Article;

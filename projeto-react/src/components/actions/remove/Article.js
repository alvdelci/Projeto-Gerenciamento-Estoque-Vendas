import React from 'react';
import { Form, FormGroup, Label, Input, CardBody, Button, Jumbotron, Container } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';
import '../../../App.css';

const Article = (props) => {
    let [codigo, setCodigo] = useState("");

    async function buscar() {
        await axios.post(`http://localhost:3002/removeproduto`, {
            search: codigo
        }).then((body) => {
            setCodigo(codigo);
            if (codigo === "") {
                alert("Preencha todos os campos!");
            }
            else if (body.data.found === false) {
                alert("Código de produto não encontrado.");
            }
            else {
                alert("Produto removido com sucesso!");
            }
        });
    }

    return (
        <div className="corpo">
            <Jumbotron className="jum bg-dark col-auto">
                <Container className="cont bg-dark col-auto">
                    <div>
                        <CardBody className="card-body bg-info  col-auto">
                            <Form className="form" type="card">
                                <FormGroup>
                                    <Label> Insira o Código do produto que dejesa remover:</Label>
                                    <Input className="input " type="text" name="codigo" value={codigo} onChange={(e) => { setCodigo(e.target.value) }} placeholder="Insira o código" />
                                </FormGroup>
                                <Button className="button col-sm" onClick={buscar}>Remover</Button>
                            </Form>
                        </CardBody>
                    </div>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Article;
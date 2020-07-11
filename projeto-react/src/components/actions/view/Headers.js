import React from 'react';
import { Navbar } from 'reactstrap';

const Headers = (props) => {

    return (
        <div>
            <Navbar className="titulo " color="info" dark expand="md"> <h2 className="home text-center">Visualização de  Produtos</h2>
            </Navbar>
        </div>
    );
}


export default Headers;

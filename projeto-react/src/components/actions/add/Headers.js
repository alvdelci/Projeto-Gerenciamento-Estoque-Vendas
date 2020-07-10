import React, { useState } from 'react';
import { Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';

const Headers = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="info" dark expand="md">
                <NavbarBrand href="/">Cadastro</NavbarBrand>
                <NavbarToggler onClick={toggle} />

            </Navbar>
        </div>
    );
}


export default Headers;
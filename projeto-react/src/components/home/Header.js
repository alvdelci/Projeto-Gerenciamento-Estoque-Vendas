import React, { useState } from 'react';
import { Navbar } from 'reactstrap';

const Headers = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="titulo " color="info" dark expand="md">
                <h2 className="home text-center">Home</h2>
            </Navbar>
        </div>
    );
}


export default Headers;
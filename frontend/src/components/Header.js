import React from 'react'
import Navbar from 'react-bootstrap/Navbar' 
import Container from 'react-bootstrap/Container'
//da vedere bene le varie librerie

import Tooltip from 'react-bootstrap/Tooltip'

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

function Header() {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Lyoko - Silos Monitoring
        </Tooltip>
      );
    return(
    <Navbar bg="transparent" variant="dark">
        <Navbar.Brand href="#home">
        <OverlayTrigger
        placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
        >
          <img
            alt=""
            src="../silo.png"
            width="auto"
            height="50"
            className="d-inline-block align-top" 
          />
          </OverlayTrigger>
        </Navbar.Brand>
    </Navbar>
    );
};

export default Header;
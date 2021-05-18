import React from 'react'

//da vedere bene le varie librerie

import Tooltip from 'react-bootstrap/Tooltip'


import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

function DescriptionUTP() {
    const renderTooltip = (props) => (
      /*  questo per il pop up dell'umitdtia...*/
       <Tooltip className="" {...props}>
        status sensors - type detected
        detection
        

        {/* nella lista di sensori livello 
            prendo il 
            (queste robe le ho per ogni livello e devo far ciclare per i 'livello0...livello7)
            stato liquido : dove si trova il mio liquido 
            detections: 
            status sensor:
             */}       
              </Tooltip>
      );
    return(

        <OverlayTrigger
        placement="right"
           
            overlay={renderTooltip}
        >
           <div className="border1 center"><p className="text"> Umidità </p></div>
           

        </OverlayTrigger>
    );
};

export default DescriptionUTP;
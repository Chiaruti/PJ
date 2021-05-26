import React, { useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Level from './components/Level';
import PopUp from './components/PopUp';
import Button from '@material-ui/core/Button';
import Daily from './components/Daily';
import Weekly from './components/Weekly';
import 'react-bootstrap/NavbarBrand'

//import Daily from './Historical';
// import ProgressBar from "bootstrap-progress-bar";
// import ControlledTabs from './components/ControlledTabs';
// import Header from './components/Header';
// import { Tab, Tabs, Sonnet, TabPanel } from 'react-tabs';
// import Description from './components/Description';


function DetailPage() {

  const [level] = useState([

    { level: 'livello7' },
    { level: 'livello6' },
    { level: 'livello5' },
    { level: 'livello4' },
    { level: 'livello3' },
    { level: 'livello2' },
    { level: 'livello1' },
    { level: 'livello0' }
  ]);

  const [popup] = useState([

    { desc: 'Umidità' },
    { desc: 'Temperatura' },
    { desc: 'Pressione' }

  ]);

  const [period, setPeriod] = useState();

  return (
  
     

      <div className="container d-flex flex-row justify-content-sm-around">
        <div className="row2 align-items-start  d-inline-flex  flex-wrap ">


          {/* prima colonna - umidità */}

          <div className="col1 col-sm">

            {popup.map((post, index) => (

              <PopUp className="border1 " key={index} desc={post.Umidità} />,
              <PopUp className="border1" key={index} desc={post.Temperatura} />,
              <PopUp className="border1 " key={index} desc={post.Pressione} />
            ))}

          </div>

          {/* seconda colonna - livelli */}

          
          <div className="col2 col-sm">

            <div className="border2">
              {/* //map = posso iterare su ogni post e stamparlo */}
              {level.map((post, index) => (

                <Level className="level" key={index} level={post.level} />

              ))}

            </div>

          </div>
         

          {/* <ProgressBar animated now={45} /> */}


          <div className="col3 col-sm">

            <div className="button">

              <Button variant="contained" size="small" color="primary" onClick={() => setPeriod(<Weekly />)}>
                Pressione
              </Button>

              <Button variant="contained" size="small" color="primary" onClick={() => setPeriod(<Daily />)}>
                Umidità  sopra
              </Button>

              <Button variant="contained" size="small" color="primary" onClick={() => setPeriod(<Weekly />)}>
              Umidità  sotto
              </Button>

              <Button variant="contained" size="small" color="primary" onClick={() => setPeriod(<Daily />)}>
                Temperatura  sopra
              </Button>

              <Button variant="contained" size="small" color="primary" onClick={() => setPeriod(<Weekly />)}>
                Temperatura  sotto
              </Button>


            </div>

            <div className=" align-items-baseline">

              {period}

            </div>

          </div>

        </div>
        </div>
  );

}

export default DetailPage;





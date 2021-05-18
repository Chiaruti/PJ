import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import ReactBootstrap from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardX from 'react-bootstrap/CardContext'
import SilosStyle from './SilosCard.css'
import DetailPage from '../secondPage/DetailPage'


const SilosCard = (props) => {
    //qua userei lo usestare per avere un index al posto dello 0 del silos
    return (
        <div className="containerSilosCard d-flex justify-content-between align-items-center">
       <Router>
        <Route path="/DetailPage" component={DetailPage}></Route>
       
        
         <Card className="silosCard d-flex align-items-center justify-content-between">
            <Card.Body className="text-sm-center ">
                <Card.Title className="">{props.block}</Card.Title>
                <Card.Subtitle className="mb-2">{props.serial}</Card.Subtitle>
                <Card.Text className="">
                {props.liquid}<br/>
                </Card.Text>
            </Card.Body>
        </Card>
         
        </Router> 
        </div>
    );
}

export default SilosCard
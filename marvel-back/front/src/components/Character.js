import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

class Character extends Component {
    state = {
        "character": this.props.character
    };
    render() {
        
        return (
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={this.props.character.pk}>
                    {this.props.character.name}
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={this.props.character.pk}>
                <Card.Body>
                <img src={this.props.character.path} alt="superheroe"/>
                {this.props.character.description}
                </Card.Body>
                </Accordion.Collapse>
            </Card>
        )
    }
}

export default Character;
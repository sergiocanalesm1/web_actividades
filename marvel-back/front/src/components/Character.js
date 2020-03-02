import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

class Character extends Component {
    state = {
        "character": this.props.character
    };
    incrementar(){
        this.setState({likes:this.state.character.likes + 1});
    }
    renderLikes(){
        return this.state.character.likes;
    }
    render() {
        return (
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={`${this.props.character.pk}`}>
                    {this.props.character.name}
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={`${this.props.character.pk}`}>
                <Card.Body>
                    <img src={this.props.character.path} alt="superheroe"/>
                    {this.props.character.description}
                    <Button variant="primary" onClick={this.incrementar}>Likes: </Button>
                    <span>{this.renderLikes()}</span>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
        )
    }
}

export default Character;
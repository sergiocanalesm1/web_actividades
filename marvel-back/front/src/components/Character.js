import React, { Component } from 'react';

class Character extends Component {
    state = {
        "character": this.props.character
    };
    render() {
        return (
            <div>
                {this.state.character.name}
                {this.state.character.description}
                {this.state.character.path}
            </div>
        );
    }
}

export default Character;
import React, { Component } from 'react';
import Character from "./Character";
import axios from "axios";

class Characters extends Component {

    componentDidMount(){
        const url = "http://gateway.marvel.com/v1/public/characters?ts=3&apikey=3019f66588507982e994e44537eb77eb&hash=2a94b0610a4504e68aca2c817a42bac7";
        axios.get(url).then(res => {
            characters = []
            for(let i = 0; i<res.data.length;i++){
                let temp_path = res.data[i].thumbnail.path;
                let extension = res.data[i].thumbnail.extension;
                let p = `${temp_path}.${extension}`;
                let character = {
                    name:res.data[i].name,
                    description : res.data[i].description,
                    path: p,
                };
                characters.push(character);
            }
            this.setState({ characters })
        });
        /*
        fetch("/characters").then(res => {
            return res.json();
        }).then(characters => {
            console.log(characters);
            this.setState({ characters });
        })
        */
    }
    state = {
        "characters" : []
    };
    render() {
        return (
            <div>
                {this.state.characters.map((e,i) => <Character key={i} character={e} />)}
            </div>
        );
    }
}

export default Characters;
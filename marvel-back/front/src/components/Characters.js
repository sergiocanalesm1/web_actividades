import React, { Component } from 'react';
import Character from "./Character";
import axios from "axios";
import Accordion from 'react-bootstrap/Accordion';

class Characters extends Component {

    componentDidMount(){
        const url = "http://gateway.marvel.com/v1/public/characters?ts=3&apikey=3019f66588507982e994e44537eb77eb&hash=2a94b0610a4504e68aca2c817a42bac7";
        axios.get(url).then(res => {
            console.log(res.data.data.results);
            let characters = []
            //console.log(res.data.length);
            for(let i = 0; i<res.data.data.results.length;i++){
                
                let temp_path = res.data.data.results[i].thumbnail.path;
                let extension = res.data.data.results[i].thumbnail.extension;
                let p = `${temp_path}.${extension}`;
                let character = {
                    pk : res.data.data.results[i].id,
                    name:res.data.data.results[i].name,
                    description : res.data.data.results[i].description,
                    path: p,
                    likes:0,
                };
                characters.push(character);
            }
            this.setState({ characters })
        });
        
    }
    state = {
        "characters" : []
    };
    render() {
        return (

            
            <Accordion>
                {this.state.characters.map((e,i) => <Character key={i} character={e} />)}
            </Accordion>
            
        )
    }
}

export default Characters;
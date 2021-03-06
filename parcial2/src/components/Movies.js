import React, { Component } from 'react';
import Movie from "./Movie.js";
import {FormattedMessage} from 'react-intl';
import * as d3 from "d3";

class Movies extends Component {
    
    state = {
        "movies" :[{
            "id": 1,
            "name": "Casablanca",
            "directedBy": "Michael Curtiz",
            "country": "United States",
            "budget": 1,
            "views": 1256000,
            "releaseDate": "1942-05-01",
            "description": "Casablanca is a 1942 American romantic drama film directed by Michael Curtiz based on Murray Burnett and Joan Alison's unproduced stage play Everybody Comes to Rick's. The film stars Humphrey Bogart, Ingrid Bergman, and Paul Henreid; it also features Claude Rains, Conrad Veidt, Sydney Greenstreet, Peter Lorre, and Dooley Wilson. Set during World War II, it focuses on an American expatriate who must choose between his love for a woman and helping her and her husband, a Czech Resistance leader, escape from the Vichy-controlled city of Casablanca to continue his fight against the Nazis.",
            "cast": "Humphrey Bogart, Ingrid Bergman, and Paul Henreid",
            "poster": "https://i.imgur.com/eM1Kkri.jpg"
        },
        {
            "id": 2,
            "name": "El abrazo de la serpiente",
            "directedBy": "Ciro Guerra",
            "country": "Colombia",
            "budget": 2,
            "views": 7256000,
            "releaseDate": "2015-12-23",
            "description": "Embrace of the Serpent (Spanish: El abrazo de la serpiente) is a 2015 internationally co-produced adventure drama film directed by Ciro Guerra, and written by Guerra and Jacques Toulemonde Vidal. Shot almost entirely in black and white, the film follows two journeys made thirty years apart by the indigenous shaman Karamakate in the Colombian Amazonian jungle, one with Theo, a German ethnographer, and the other with Evan, an American botanist, both of whom are searching for the rare plant yakruna. It was inspired by the travel diaries of Theodor Koch-Grunberg and Richard Evans Schultes, and dedicated to lost Amazonian cultures.",
            "cast": "Nilbio Torres, Antonio Bolívar, Jan Bijvoet, Brionne Davis, and Luigi Sciamanna",
            "poster": "https://i.imgur.com/5evik9m.jpg"
        },
        {
            "id": 3,
            "name": "Le Fabuleux Destin d'Amélie Poulain",
            "directedBy": "Jean-Pierre Jeunet",
            "country": "France",
            "budget": 3,
            "views": 856000,
            "releaseDate": "2001-04-28",
            "description": "Amélie (also known as Le Fabuleux Destin d'Amélie Poulain; French pronunciation: ​[lə fabylø destɛ̃ d‿ameli pulɛ̃]; English: The Fabulous Destiny of Amélie Poulain) is a 2001 French romantic comedy film directed by Jean-Pierre Jeunet. Written by Jeunet with Guillaume Laurant, the film is a whimsical depiction of contemporary Parisian life, set in Montmartre.",
            "cast": "Audrey Tautou, Flora Guiet, Mathieu Kassovitz, Amaury Babault",
            "poster": "https://i.imgur.com/gRzAmAI.jpg"
        },
        {
            "id": 4,
            "name": "Die Welle",
            "directedBy": "Dennis Gansel",
            "country": "Germany",
            "budget": 5,
            "views": 2300000,
            "releaseDate": "2008-05-29",
            "description": "Die Welle (The Wave) is a 2008 German socio-political thriller film directed by Dennis Gansel and starring Jürgen Vogel, Frederick Lau, Jennifer Ulrich and Max Riemelt in the leads. It is based on Ron Jones' social experiment The Third Wave and Todd Strasser's novel, The Wave. The film was produced by Christian Becker for Rat Pack Filmproduktion. It was successful in German cinemas, and after ten weeks, 2.3 million people had watched it",
            "cast": "Jürgen Vogel, Frederick Lau, Max Riemelt",
            "poster": "https://i.imgur.com/rfkxsqx.jpg"
        },
        {
            "id": 5,
            "name": "El secreto de sus ojos",
            "directedBy": "Juan José Campanella",
            "country": "Argentina",
            "budget": 2,
            "views": 4256000,
            "releaseDate": "2009-09-19",
            "description": "The Secret in Their Eyes (Spanish: El secreto de sus ojos) is a 2009 crime drama film directed, co-written, produced and edited by Juan José Campanella, based on the novel La pregunta de sus ojos (The Question in Their Eyes) by Eduardo Sacheri, who also co-wrote the screenplay. The film is a joint production of Argentine and Spanish companies",
            "cast": "Ricardo Darín, Soledad Villamil, Guillermo Francella",
            "poster": "https://i.imgur.com/jBpbtDL.jpg"
        },
        {
            "id": 6,
            "name": "Seven Samurai",
            "directedBy": "Akira Kurosawa",
            "country": "Japan",
            "budget": 1,
            "views": 9256000,
            "releaseDate": "1954-02-06",
            "description": "Seven Samurai (Japanese: 七人の侍 Hepburn: Shichinin no Samurai) is a 1954 Japanese epic samurai drama film co-written, edited, and directed by Akira Kurosawa. The story takes place in 1586[2] during the Sengoku period of Japanese history. It follows the story of a village of farmers that hire seven rōnin (masterless samurai) to combat bandits who will return after the harvest to steal their crops.",
            "cast": "Takashi Shimura, Yoshio Inaba, Daisuke Katō, Seiji Miyaguchi, Minoru Chiaki, Isao Kimura, Toshiro Mifune",
            "poster": "https://i.imgur.com/v1uRssS.jpg"
        }
        ]}
    componentDidMount(){
        const data = this.state;
        //draw(data);

    }
    draw(data){

    }
        //{this.state.movies.map((e,i) => <Movie key={i} movie={e} />)}
    render() {
        return (
            <div>
                <div>
                    <FormattedMessage id="banner"/>
                </div>
                <div>
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col"><FormattedMessage id="name"/></th>
                            <th scope="col"><FormattedMessage id="director"/></th>
                            <th scope="col"><FormattedMessage id="country"/></th>
                            <th scope="col"><FormattedMessage id="budget"/></th>
                            <th scope="col"><FormattedMessage id="release"/></th>
                            <th scope="col"><FormattedMessage id="views"/></th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.state.movies.map((e,i) => <Movie key={i} movie={e} />)}
                        </tbody>
                    
                    </table>
                </div>
                
            </div>
        );
    }
}

export default Movies;
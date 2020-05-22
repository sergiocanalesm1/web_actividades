import React, { Component } from 'react';
import {FormattedDate,FormattedNumber,FormattedMessage} from 'react-intl';



class Movie extends Component {
    state = {
        "movie":this.props.movie
    }

    
    budget(){
        let m="";
        if( this.state.movie.budget == 1){
          //m =  "million";
          m = <FormattedMessage id="million-s"/>;
        }
        else{
            //m = "millions" 
          m = <FormattedMessage id="million-p"/>;
        }
        
        return m ;
    }
    render() {
        return (
            <tr>
                <th scope="row">{this.state.movie.id}</th>
                <td>{this.state.movie.name}</td>
                <td>{this.state.movie.directedBy}</td>
                <td>{this.state.movie.country}</td>
                <td>{this.state.movie.budget}{this.budget()}</td>
                <td> <FormattedDate
                    value={new Date(this.state.movie.releaseDate)}
                    year='numeric'
                    month='long'
                    day='numeric'
                    weekday='long'
                    />
                </td>
                <td>
                    <FormattedNumber
						value = {this.state.movie.views}
					/>
                </td>              
            </tr>
        );
    }
}

export default Movie;
import React, { Component } from 'react'
import {list_ico} from '../constants';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        var Listitems = []
        const menu = {'Cocktail':`${list_ico}/cocktail.svg`, 'Shot':`${list_ico}/shot.svg`, 'Beer' : `${list_ico}/beer.svg`, 'Homemade Liqueur':`${list_ico}/homemade.svg`};
        const prefix = '/show/'
        for (const [key, value] of Object.entries(menu)) {
            Listitems.push( <Link className="App-List" to={prefix + key}><img className="List-Icon" alt={key} src={process.env.PUBLIC_URL + value}></img><p className="List-Name">{key}</p></Link>);
        }
        return (
            <div className="App-Container">
                {Listitems}
            </div>
        )
    }
}
export default Home;
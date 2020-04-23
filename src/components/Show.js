import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {api} from '../constants.js';

const Show = (props)=> {
    const [hasError, setErrors] = useState(false);
    var [result, setResult] = useState([]);
    const category = props.match.params.category;
    var [isLoading, setIsLoaing] = useState(true);
    useEffect(() => {
      async function fetchData() {
        const res = await fetch(`${api}filter.php?c=${category}`);
        res
          .json()
          .then(res => setResult(res.drinks))
          .catch(err => setErrors(err));
          setIsLoaing(false);
      }
      fetchData();
      
    },[]);


    return (
        <div className="List-Container">
            {  
               result.map(drink => 
              <Link className="List" key={drink.idDrink} to={`/view/${category}/${drink.idDrink}`}>
                <img className="List-Thump" src={`${drink.strDrinkThumb}/preview`}></img>
                <p className="List-Title">{drink.strDrink}</p>
              </Link>
              )
            }
            {isLoading&&<div className="Loader"></div>}
        </div>
    )
}

export default Show;
import React, { useState, useEffect } from 'react'
import { object } from 'prop-types';

const Show = (props)=> {
    const [hasError, setErrors] = useState(false);
    const [drinks, setDrinks] = useState({});
    const category = props.match.params[0];
    useEffect(() => {
      async function fetchData() {
        const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c="+category);
        res
          .json()
          .then(res => setDrinks(res))
          .catch(err => setErrors(err));
      }
      fetchData();
    },[]);

    var list = [];
    for(var drink of Object.values(drinks)){
        for(var ele of Object.values(drink)){
            var vars = Object.values(ele)
            list.push(<a className="List" href={`/details/${category}/${vars[2]}`}><img className="List-Thump" src={`${vars[1]}/preview`}></img><p className="List-Title">{vars[0]}</p></a>)
        }
    }
    
    return (
        <div>
            {list}
        </div>
    )
}

export default Show;
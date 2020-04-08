import React,  { useState, useEffect } from 'react'

function Details(props) {
    var url = props.match.params[0];
    var id = url.split('/')[1];
    const [hasError, setErrors] = useState(false);
    const [details, setDetails] = useState({});
    useEffect(() => {
        async function fetchData() {
          const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+id);
          res
            .json()
            .then(res => setDetails(res))
            .catch(err => setErrors(err));
        }
        fetchData();
    },[]);
    
    var DrinkName, Glass, Thumbnail, Instruction = [], Date
    var Ingredient=[]
    var Measure=[]

    for(var [key,value] of Object.entries(details)){
        for(var drink of value){
            DrinkName = drink.strDrink
            Glass = drink.strGlass
            Thumbnail = drink.strDrinkThumb
            for (var ins of drink.strInstructions.split(/[0-9]./)){
                if(ins){
                    Instruction.push(<li>{ins}</li>)
                }
            }
            Date = drink.dateModified
            for(var k of Object.keys(drink)){   
                if( k.includes('strIngredient') && drink[k] != null){
                   Ingredient.push(
                        <tr>
                            <td>{drink[k]}</td>
                            <td>{drink[k.replace('strIngredient','strMeasure')]}</td>
                       </tr>) 
                }
            }
            console.log(details);
            
        }
    }
    
    
    return (
        <div className="Details">
            <h3 className="Details-Title">{DrinkName}</h3>
            <img className="Details-Img" src={Thumbnail}></img>
            <div className="Details-Body">
                <div className="Details-Tag">
                    <img src="/img/ico/glass.svg" className="Tag-Ico"></img><p className="Glass">{Glass}</p> 
                    <img src="/img/ico/clock.svg" className="Tag-Ico"></img><p className="Date">{Date}</p>
                    </div>
                <table className="Details-Table">
                    <tr>
                        <th>Ingredients</th>
                        <th>Measure</th>
                    </tr>
                    {Ingredient}
                </table>               
                <h4>Instructions:</h4>
                <ol>{Instruction}</ol>
            </div>
        </div>
    )
}
export default Details;
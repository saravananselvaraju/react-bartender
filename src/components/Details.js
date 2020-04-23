import React, { useState, useEffect } from 'react';
import { api } from '../constants.js';

function Details(props) {
    var id = props.match.params.id;
    const [hasError, setErrors] = useState(false);
    const [details, setDetails] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`${api}lookup.php?i=${id}`);
            res
                .json()
                .then(res => setDetails(res.drinks[0]))
                .catch(err => setErrors(err));
            setisLoading(false)
        }
        fetchData();
    }, []);

    let list = []
    for (var key of Object.keys(details)) {
        if (key.includes("strIngredient") && details[key] != null) {
            list.push(<tr key={key}><td>{details[key]}</td><td>{details[key.replace('strIngredient', 'strMeasure')]}</td></tr>)
        }
    }


    return (
        <div className="Details">
            <div className="Details-Left">
                <div className="card">
                    <img className="Details-Img" src={details.strDrinkThumb}></img>
                    {
                        isLoading && <div className="Loader"></div>
                    }
                    <h3 className="Details-Title">{details.strDrink}</h3>
                </div>
            </div>
            <div className="Details-Right">
                <h4>Ingredients</h4>
                <div className="Details-Tag">
                    <img src={process.env.PUBLIC_URL + "/img/ico/glass.svg"} className="Tag-Ico"></img><p className="Glass">{details.strGlass}</p>
                    <img src={process.env.PUBLIC_URL + "/img/ico/clock.svg"} className="Tag-Ico"></img><p className="Date">
                        {
                            details.dateModified && details.dateModified.split(' ')[0]
                        }
                    </p>

                </div>
                <table className="Details-Table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Measure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list
                        }
                        {
                            isLoading && <div className="Loader"></div>
                        }
                    </tbody>
                </table>
                <h4>Instructions</h4>
                <p>
                    {details.strInstructions}
                </p>
            </div>
        </div>
    )
}
export default Details;
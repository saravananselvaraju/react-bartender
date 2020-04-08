import React from 'react'

function Nav() {
    return (
        <nav>
            <div>
                <img className="App-Logo-Img" src={process.env.PUBLIC_URL + '/img/ico/bartender.svg'}/>
                <a className="App-Logo" href={process.env.PUBLIC_URL +"/"}>Bartender</a>
            </div>
        </nav>
    )
}

export default Nav;


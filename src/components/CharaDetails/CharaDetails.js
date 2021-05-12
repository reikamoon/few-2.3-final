import React from 'react';
import './CharaDetails.css'

function CharaDetails(props) {
    const { list } = props
    const tatooine = "http://swapi.dev/api/planets/1/"
    const newhope = "http://swapi.dev/api/films/1/"
    const empirestrikesback = "http://swapi.dev/api/films/2/"
    const returnofjedi = "http://swapi.dev/api/films/3/"
    const phantommenace = "http://swapi.dev/api/films/4/"
    const attackoftheclones = "http://swapi.dev/api/films/5/"
    const revengeofthesith = "http://swapi.dev/api/films/6/"

    return (
        <div>
        {list.map((character, item) => {
            return (
              <div className="CharaDetails" key={item}>
                <h2>
                  <i className="fas fa-star"></i>
                  {character.name}
                </h2>
                <h3>Biology</h3>
                {character.species[0] === "http://swapi.dev/api/species/2/" ? (
                  <p>Species: Droid</p>
                ) : null}
                <p>Sex: {character.gender}</p>
                <p>Birth Year: {character.birth_year}</p>
                <p>Height: {character.height}in</p>
                <p>Mass: {character.mass}kg</p>
                <p>Skin Color: {character.skin_color}</p>
                <p>Hair Color: {character.hair_color}</p>
                <h3>Movie Information</h3>
                {character.homeworld === tatooine ? (
                  <p>Home Planet: Tatooine</p>
                ) : null}
                <p>Appears In:</p>
                {character.films.includes(newhope) ? <li>A New Hope</li> : null}
                {character.films.includes(empirestrikesback) ? (
                  <li>Empire Strikes Back</li>
                ) : null}
                {character.films.includes(returnofjedi) ? (
                  <li>Return of the Jedi</li>
                ) : null}
                {character.films.includes(phantommenace) ? (
                  <li>The Phantom Menace</li>
                ) : null}

                {character.films.includes(attackoftheclones) ? (
                  <li>Attack of the Clones</li>
                ) : null}

                {character.films.includes(revengeofthesith) ? (
                  <li>Revenge of the Sith</li>
                ) : null}
              </div>
            );
        })}

      
        
        </div>
    )
}

export default CharaDetails
import React, { useState, useEffect } from 'react';

import CardList from '../components/card-list/CardList';
import SearchBox from '../components/search-box/SearchBox';
import Scroll from '../components/scroll/Scroll'

import './App.css'
import ErrorBoundry from '../core/error/ErrorBoundry';

function App () {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => setRobots( users))
  },[]) // only run if [something] changes

  // Recuerda que usamos un ARROW FUNCTION para que obtenga el THIS del "sitio" en el que se ha creado, NO de donde se invoca (en este caso en SearchBox Component)
  const onSearchChange = (event) => {
    setSearchfield( event.target.value)
  }
    
  const filteredRobots = robots.filter((robots) =>
    robots.name.toLowerCase().includes(searchfield.toLowerCase())
  );
  console.log(robots)
  
  return (!robots.length) ? 
    <h1>Loading ...</h1>
  :
    (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange}></SearchBox>
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots}></CardList>
        </ErrorBoundry>
      </Scroll>
    </div>
    );
}

export default App;
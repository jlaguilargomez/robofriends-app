import React from 'react';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';
import { robots } from './core/robots/robots';

const App = () => {
  return (
    < div className="tc" >
      <h1>RoboFriends</h1>
      <SearchBox></SearchBox>
      <CardList robots = {robots}></CardList>
    </div>
  )
}

export default App;
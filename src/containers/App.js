import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import CardList from '../components/card-list/CardList';
import SearchBox from '../components/search-box/SearchBox';
import Scroll from '../components/scroll/Scroll'

import './App.css'
import ErrorBoundry from '../core/error/ErrorBoundry';
import { setSearchField } from '../redux/actions';


const mapStateToProps = state => { 
  return {
    searchField: state.searchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) =>{dispatch(setSearchField(event.target.value))}

  }
}

function App (props) {
  const [robots, setRobots] = useState([]);
  
  // const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => setRobots( users))
  },[]) // only run if [something] changes

  // Recuerda que usamos un ARROW FUNCTION para que obtenga el THIS del "sitio" en el que se ha creado, NO de donde se invoca (en este caso en SearchBox Component)
  // const onSearchChange = (event) => {
  //   setSearchfield( event.target.value)
  // }
    
  const filteredRobots = robots.filter((robots) =>
    robots.name.toLowerCase().includes(props.searchField.toLowerCase())
  );
  
  return (!robots.length) ? 
    <h1>Loading ...</h1>
  :
    (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={props.onSearchChange}></SearchBox>
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots}></CardList>
        </ErrorBoundry>
      </Scroll>
    </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
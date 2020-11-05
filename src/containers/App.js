import React from 'react';

import CardList from '../components/card-list/CardList';
import SearchBox from '../components/search-box/SearchBox';
import Scroll from '../components/scroll/Scroll'

import { robots } from '../core/robots/robots';
import './App.css'
import ErrorBoundry from '../core/error/ErrorBoundry';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: '',
    };
  }


  // En los métodos del ciclo de vida, no es necesario binderar el THIS
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => this.setState({robots: users}))
  }

  // Recuerda que usamos un ARROW FUNCTION para que obtenga el THIS del "sitio" en el que se ha creado, NO de donde se invoca (en este caso en SearchBox Component)
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
    
  }
  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robots) =>
      robots.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    return (!robots.length) ? 
       <h1>Loading ...</h1>
    :
       (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}></SearchBox>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots}></CardList>
            </ErrorBoundry>
          </Scroll>
        </div>
      );
  }
}

export default App;
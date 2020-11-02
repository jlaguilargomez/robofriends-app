import React from 'react';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';
import { robots } from './core/robots/robots';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfields: '',
    };
  }

  // Recuerda que usamos un ARROW FUNCTION para que obtenga el THIS del "sitio" en el que se ha creado, NO de donde se invoca (en este caso en SearchBox Component)
  onSearchChange = (event) => {
    this.setState({searchfields: event.target.value})
    
  }
  render() {
    const filteredRobots = this.state.robots.filter((robots) =>
      robots.name.toLowerCase().includes(this.state.searchfields.toLowerCase())
    );
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}></SearchBox>
        <CardList robots={filteredRobots}></CardList>
      </div>
    );
  }
}

export default App;
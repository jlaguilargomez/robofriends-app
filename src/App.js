import React from 'react';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';
import { robots } from './core/robots/robots';
import './App.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfields: '',
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
    this.setState({searchfields: event.target.value})
    
  }
  render() {
    const filteredRobots = this.state.robots.filter((robots) =>
      robots.name.toLowerCase().includes(this.state.searchfields.toLowerCase())
    );
    if (this.state.robots.length === 0) { 
      return <h1>Loading ...</h1>
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}></SearchBox>
          <CardList robots={filteredRobots}></CardList>
        </div>
      );
    }
    
  }
}

export default App;
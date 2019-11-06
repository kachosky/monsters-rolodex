import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/CardListComponent";
import {SearchBox} from "./components/searchBox/SearchBoxComponent"

class App extends Component{

  constructor(props){
      super(props)

      this.state = {
          monsters : [],
          searchTextField: ''
      }
  }

  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(users => this.setState({monsters: users}))
  }

  handleChange = e => {
      this.setState({searchTextField: e.target.value})
  }

  render(){

      const {monsters, searchTextField} = this.state;
      const filteredMonsters = monsters.filter(monster => (
          monster.name.toLowerCase().includes(searchTextField.toLowerCase())
      ))

      return(
          <div className="App">
              <h1> Monsters Rolodex </h1>
              <SearchBox
                  placeholder="Search monsters"
                  handleChange={this.handleChange}
              />
              <CardList monsters={filteredMonsters}/>
          </div>
      )
  }
}

export default App;

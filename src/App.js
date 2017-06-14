import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Project';
import AddProject from './Components/Add';
import './App.css';

class App extends Component {
     constructor (){
        super();
        this.state = {
            projects: []
        }
    }

    componentWillMount(){
        this.setState({projects : [
              {
                id : uuid.v4(),
                name: 'Andrzej',
                secondName : 'Bajuk',
                job : 'programista'
            },{
                id : uuid.v4(),
                name: 'Jan ',
                secondName: 'Kowalski',
                job : 'ksiegowy'
            },{
                id : uuid.v4(),
                name: 'Marta',
                secondName : 'Swieradowska',
                job : 'dyrektor'
            }
        ]})
    }
    handleAddPerson(project){
        let projects = this.state.projects;
        projects.push(project);
        this.setState({projects:projects})
    }
    handleDeletePerson(id){
        let projects = this.state.projects;
        // przeszukuje wszystkie obiekty i pobiera id i dopasowuje do id ktore przekazalismy
        // w funkcji jezeli sie zgadza usuwamy jedna pozycje za pomoca splice
        let index = projects.findIndex(x => x.id === id);
        projects.splice(index,1)
        //po usuniecie resetujem state
        this.setState({projects:projects})
    }
  render() {
    return (
      <div className="App">
           <AddProject addPerson = {this.handleAddPerson.bind(this)}/>
          <Projects projects= {this.state.projects} onDelete={this.handleDeletePerson.bind(this)}/>
      </div>
    );
  }
}

export default App;

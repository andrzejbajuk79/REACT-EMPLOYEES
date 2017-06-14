import React, { Component } from 'react';
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
                name: 'Andrzej',
                secondName : 'Bajuk',
                job : 'programista'
            },{
                name: 'Jan ',
                secondName: 'Kowalski',
                job : 'ksiegowy'
            },{
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
  render() {
    return (
      <div className="App">
           <AddProject addPerson = {this.handleAddPerson.bind(this)}/>
          <Projects projects= {this.state.projects}/>
      </div>
    );
  }
}

export default App;

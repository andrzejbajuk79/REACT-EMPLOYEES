import React, { Component } from 'react';
import ProjectItem from './ProjectItem';


class Projects extends Component {
  deletePerson(id){
      this.props.onDelete(id);
  }
  render() {
    let projectItems;
    if(this.props.projects){
        projectItems = this.props.projects.map(project => {
            return (
                <ProjectItem onDelete={this.deletePerson.bind(this)}  key= {project.name} project = {project} />
            );
        });
    }
  //console.log(this.props);
    return (
      <div className="Projects">
        <h2> Lista Pracownikow</h2>
      {projectItems}
      </div>
    );
  }
}

export default Projects;
/**
 * Created by abajuk on 14.06.2017.
 */

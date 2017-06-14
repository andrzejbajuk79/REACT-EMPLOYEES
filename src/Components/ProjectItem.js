/**
 * Created by abajuk on 14.06.2017.
 */
import React, { Component } from 'react';


class ProjectItem extends Component {
 deletePerson(id){
     //console.log('test');
     this.props.onDelete(id)
 }
  render() {

  //console.log(this.props);
    return (
      <li className="Project">
      <strong>{this.props.project.name} {this.props.project.secondName}</strong> {this.props.project.job}
          <a href="#" className='del' onClick={this.deletePerson.bind(this,this.props.project.id)}> X </a>
      </li>
    );
  }
}


export default ProjectItem;
/**
 * Created by abajuk on 14.06.2017.
 */

/**
 * Created by abajuk on 14.06.2017.
 */
import React, { Component } from 'react';


class ProjectItem extends Component {

  render() {

  //console.log(this.props);
    return (
      <li className="Project">
      <strong>{this.props.project.name} {this.props.project.secondName}</strong> {this.props.project.job}
      </li>
    );
  }
}

export default ProjectItem;
/**
 * Created by abajuk on 14.06.2017.
 */

import projects from '../data/projects.json';
import React, { Component } from 'react';
import Project from './Project'

class Projects extends Component {
  render() {

    return(
      <div>
      {projects.allProjects.map((project) => <Project key={project.title} title={project.title} description={project.description} imgName = {project.imgName} />)}
        {console.log(projects.allProjects)}
      </div>
    )
  }
}

export default Projects;

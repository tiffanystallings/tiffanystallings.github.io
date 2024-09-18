import { Component } from '@angular/core';
import projectJson from '../../../data/project.json'
import { Project, ProjectCategory, ProjectData } from '../../interfaces/project.interface';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projectData: ProjectData = projectJson;
  projects: Array<Project> = this.projectData.items;
  categories: Array<ProjectCategory> = this.projectData.categories;

  _sortProjects() {
    this.projects = this.projects.sort((a, b) => {
      const aWeight = a.featured ? a.weight * 10 : a.weight;
      const bWeight = b.featured ? b.weight * 10 : b.weight;

      if (aWeight > bWeight) {
        return -1
      } else if (bWeight > aWeight) {
        return 1
      } else {
        return 0
      }
    })

    console.log(this.projects);
  }

  ngOnInit() {
    this._sortProjects();
  }
}

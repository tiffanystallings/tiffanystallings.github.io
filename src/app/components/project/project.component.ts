import { Component, Input } from '@angular/core';
import projectJson from '../../../data/project.json'
import { Project, ProjectCategory, ProjectData } from '../../interfaces/project.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  category: string = 'all';
  projectData: ProjectData = projectJson;
  projects: Array<Project> = this.projectData.items;
  categories: Array<ProjectCategory> = this.projectData.categories;

  private _sortProjects() {
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
    });
  }

  private _filterProjects() {
    this.projects = this.projects.filter(project => {
      return project.categories.includes(this.category);
    });
  }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category') || '';
    
    // Redirect to 'all' category if category is invalid
    if (!this.categories.find(category => category.name === this.category)) {
      this.router.navigate(['/project', { category: 'all' }]);
    }

    console.log(this.category);
    this._filterProjects();
    this._sortProjects();
  }
}

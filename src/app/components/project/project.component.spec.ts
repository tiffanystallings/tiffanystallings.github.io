import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectComponent } from './project.component';
import { AppModule } from '../../app.module';
import projectJson from '../../../data/project.json';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the project-container div', () => {
    let compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#project-container')).toBeTruthy();
  })

  it('should have a project-preview element for each item in the project JSON', () => {
    let compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-project-preview').length).toEqual(projectJson.items.length);
  })
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPreviewComponent } from './project-preview.component';

describe('ProjectPreviewComponent', () => {
  let component: ProjectPreviewComponent;
  let fixture: ComponentFixture<ProjectPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a preview-card div', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.preview-card')).toBeTruthy();
  })
});

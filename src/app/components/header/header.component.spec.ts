import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { AppModule } from '../../app.module';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the header element', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('header')).toBeTruthy();
  })

  it('should contain the socials component if windowSize <= 1000', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    component.windowSize = 800;
    fixture.detectChanges();
    expect(compiled.querySelector('header')?.querySelector('app-social')).toBeTruthy();
  })

  it('should not contain the socials component if windowSize > 1000', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    component.windowSize = 1200;
    fixture.detectChanges();
    expect(compiled.querySelector('header')?.querySelector('app-social')).toBeFalsy();
  })

  it('should contain an h1 element with the text "Tiffany Stallings"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.innerText).toEqual('Tiffany Stallings');
  })

  it('should contain an p element with the text "Software Engineer"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.innerText).toEqual('Software Engineer');
  })
});

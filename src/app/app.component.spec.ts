import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'Tiffany Stallings - Portfolio' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Tiffany Stallings - Portfolio');
  });

  it('should render a nav element', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('nav')).toBeTruthy();
  })

  it('should render a main element', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('main')).toBeTruthy();
  })

  it('should render router outlet in the main element', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('main')?.querySelector('router-outlet')).toBeTruthy();
  })

  it('should render navbar component in the nav element', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('nav')?.querySelector('app-navbar')).toBeTruthy();
  })

  it('should render the header component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-header')).toBeTruthy();
  })

  it('should render the header component in the nav element when window is resized to greater than 1200px', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    spyOnProperty(window, 'innerWidth').and.returnValue(1200);
    window.dispatchEvent(new Event('resize'));
    fixture.detectChanges();

    expect(compiled.querySelector('nav')?.querySelector('app-header')).toBeTruthy();
  })

  it('should not render the header component in the nav element when window is resized to less than 1000px', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    spyOnProperty(window, 'innerWidth').and.returnValue(800);
    window.dispatchEvent(new Event('resize'));
    fixture.detectChanges();

    expect(compiled.querySelector('nav')?.querySelector('app-header')).toBeFalsy();
  })

  it('should render the social component in the nav element when window is resized to greater than 1200px', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    spyOnProperty(window, 'innerWidth').and.returnValue(1200);
    window.dispatchEvent(new Event('resize'));
    fixture.detectChanges();

    expect(compiled.querySelector('nav')?.querySelector('app-social')).toBeTruthy();
  })

  it('should not render the social component in the nav element when window is resized to less than 1000px', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    spyOnProperty(window, 'innerWidth').and.returnValue(800);
    window.dispatchEvent(new Event('resize'));
    fixture.detectChanges();

    expect(compiled.querySelector('nav')?.querySelector('app-social')).toBeFalsy();
  })
});

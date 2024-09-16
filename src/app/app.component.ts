import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tiffany Stallings - Portfolio';
  windowSize = 0;

  ngOnInit() {
    this.windowSize = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: {target: Window}) {
    this.windowSize = event.target.innerWidth
  }
}

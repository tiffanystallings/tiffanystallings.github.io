import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './components/project/project.component';
import { AppComponent } from './app.component';
import { provideRouter, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { SocialComponent } from './components/social/social.component';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProjectPreviewComponent } from './components/project/project-preview/project-preview.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    NavbarComponent,
    HeaderComponent,
    SocialComponent,
    ProjectPreviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule
  ],
  providers: [provideRouter(routes), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }

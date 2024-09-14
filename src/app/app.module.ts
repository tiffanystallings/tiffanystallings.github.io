import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { AppComponent } from './app.component';
import { provideRouter, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { SocialComponent } from './social/social.component';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    NavbarComponent,
    HeaderComponent,
    SocialComponent
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

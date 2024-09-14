import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { SocialComponent } from './social/social.component';
import { BrowserModule } from '@angular/platform-browser';


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
  bootstrap: [AppComponent]
})
export class AppModule { }

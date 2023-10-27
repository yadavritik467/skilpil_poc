import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';

import { CourseComponent } from './pages/course/course.component';
import { CarouselModule } from 'ngx-owl-carousel-o';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    PageNotFoundComponent,
    CourseDetailsComponent,
    NavbarComponent,
    CourseComponent,
    CourseComponent,
    CourseDetailsComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

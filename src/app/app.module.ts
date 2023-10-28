import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF, CommonModule, PlatformLocation } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { CourseComponent } from './pages/course/course.component';

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
    imports: [BrowserModule, BrowserAnimationsModule, CommonModule, AppRoutingModule, CarouselModule],
    providers: [
        {
            provide: APP_BASE_HREF,
            useFactory: (location: PlatformLocation) => location.getBaseHrefFromDOM(),
            deps: [PlatformLocation]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

import { Component, HostListener, Renderer2 } from '@angular/core';
import { fadeInAnimation } from '../animations';
import { coursesSchema } from '../schema/course.schema';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    animations: [fadeInAnimation]
})
export class HeaderComponent {
    isSticky: boolean = false;
    courses: any[] = coursesSchema;

    constructor(private renderer: Renderer2) {}

    @HostListener('window:scroll', ['$event'])
    onScroll() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        this.isSticky = scrollPosition > 50; // Change 50 to your desired scroll position
    }

    // for toggling event
    className: string = 'hidden';

    toggleClassName() {
        this.className = this.className === 'hidden' ? 'flex' : 'hidden';
    }
}

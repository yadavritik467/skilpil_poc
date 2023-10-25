import { Component,HostListener, Renderer2 } from '@angular/core';
import { fadeInAnimation } from '../animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [fadeInAnimation] 
})
export class HeaderComponent {
  isSticky: boolean = false;  
  courses: any[] = [
    {
      image: 'https://www.skilpil.com/images/img/img-3.jpg',
      title: 'Web Development',
      duration: '30-90 Hours Program'
    },
    {
      image: 'https://www.skilpil.com/images/img/img-4.jpg',
      title: 'Mobile App Development',
      duration: '30-90 Hours Program'
    },
    {
      image: 'https://www.skilpil.com/images/img/img-5.jpg',
      title: 'Personality Development',
      duration: '30 Hours Program'
    },
    {
      image: 'https://www.skilpil.com/images/img/b2b.jpg',
      title: 'B2B Sales Training',
      duration: '30-90 Hours Program'
    },
    {
      image: 'https://www.skilpil.com/images/img/b2c.jpg',
      title: 'B2C Sales Training',
      duration: '30-90 Hours Program'
    },
    {
      image: 'https://www.skilpil.com/images/img/event.jpg',
      title: 'Event Management Programs',
      duration: '30 Hours Program'
    },
    {
      image: 'https://www.skilpil.com/images/img/financial.jpg',
      title: 'Financial Planning',
      duration: '30-90 Hours Program'
    },
    {
      image: 'https://www.skilpil.com/images/img/DigitalMarketing.jpg',
      title: 'Digital Marketing',
      duration: '30-90 Hours Program'
    },
    {
      image: 'https://www.skilpil.com/images/img/Wealth.jpg',
      title: 'Wealth Management',
      duration: '30 Hours Program'
    },
    {
      image: 'https://www.skilpil.com/images/img/Insurance.jpg',
      title: 'Insurance',
      duration: '30-90 Hours Program'
    },
    {
      image: 'https://www.skilpil.com/images/img/mutualfund.jpg',
      title: 'Mutual Funds',
      duration: '30-90 Hours Program'
    },
    {
      image: 'https://www.skilpil.com/images/img/banking.jpg',
      title: 'Banking Courses',
      duration: '30 Hours Program'
    },
    // Add more course objects as needed
  ];

  constructor(private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
onScroll() {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
  this.isSticky = scrollPosition > 50; // Change 50 to your desired scroll position
}

// for toggling event
  className: string = 'hidden';

  toggleClassName(){
    this.className = this.className === 'hidden' ? 'flex':'hidden';
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  courseName: string = 'Introduction to Angular';
  courseDescription: string = 'Learn the basics of Angular framework and how to build modern web applications.';
  courseDuration: string = '5 hours';
  courseImage: string = 'assets/banners/amma.jpg';

}

import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

@Component({
  standalone: true,
  imports: [HomeComponent],
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Home page';
}

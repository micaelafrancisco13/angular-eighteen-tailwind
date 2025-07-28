import { Component } from '@angular/core';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-root',
  imports: [ThemeSwitcherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-eighteen-tailwind';
}

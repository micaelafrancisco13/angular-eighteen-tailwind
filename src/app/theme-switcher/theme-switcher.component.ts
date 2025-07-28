import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  imports: [],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.css'
})
export class ThemeSwitcherComponent {
  isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const htmlElement = document.documentElement; // Root <html> element
    if (this.isDarkMode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }
}

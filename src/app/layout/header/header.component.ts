import { Component, signal, WritableSignal } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-header',
  imports: [SvgIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public darkMode: WritableSignal<boolean> = signal(false);
  public menuOpen: WritableSignal<boolean> = signal(false);

  constructor() {}

  toggleMode() {
    const newMode = !this.darkMode();
    this.darkMode.set(newMode);
    document.documentElement.setAttribute(
      'data-theme',
      newMode ? 'dark' : 'light'
    );
  }

  toggleMenu() {
    this.menuOpen.update(open => !open);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}

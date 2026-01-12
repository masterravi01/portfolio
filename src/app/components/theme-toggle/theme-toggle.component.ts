import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      (click)="themeService.toggleTheme()" 
      class="p-2 rounded-full transition-colors duration-200 hover:bg-bg-surface focus:outline-none focus:ring-2 focus:ring-primary"
      [attr.aria-label]="themeService.darkMode() ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
    >
      <!-- Sun Icon (shows in dark mode, hidden in light mode via logic or rotation) -->
      <svg *ngIf="themeService.darkMode()" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary-hover animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      
      <!-- Moon Icon (shows in light mode) -->
      <svg *ngIf="!themeService.darkMode()" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-text-muted hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    </button>
  `,
  styles: [`
    .animate-spin-slow {
      animation: spin 3s linear infinite;
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `]
})
export class ThemeToggleComponent {
  themeService = inject(ThemeService);
}

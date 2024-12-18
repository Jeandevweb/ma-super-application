import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';

interface NavItem {
  path: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  navItems: NavItem[] = [
    { path: '/', label: 'Accueil' },
    { path: '/posts', label: 'Posts' },
    { path: '/users', label: 'Users' },
    { path: '/todos', label: 'Todos' },
  ];

  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

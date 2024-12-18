import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: HomeComponent,
  },
  {
    path: 'posts',
    loadComponent: () =>
      import('./pages/posts/posts.component').then((p) => p.PostsComponent),
    title: 'App Posts Page',
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./pages/users/users.component').then((p) => p.UsersComponent),
    title: 'App Users Page',
  },
  {
    path: 'todos',
    loadComponent: () =>
      import('./pages/todos/todos.component').then((p) => p.TodosComponent),
    title: 'App Todos Page',
  },
];

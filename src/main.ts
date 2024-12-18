import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet, provideRouter } from '@angular/router';
import { inject, Input, ResourceStatus } from '@angular/core';

import { routes } from './app/app.routes';
import { NavbarComponent } from './app/components/navbar/navbar.component';
import { ApiService } from './app/api/apiCall';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  standalone: true,
  template: `
    <div class="bg-gray-800 flex flex-col"  >
    <app-navbar/>
        <div class="m-auto">
    <router-outlet></router-outlet>
  </div>
  </div>
  `,
})
export class App {
  apiServices = inject(ApiService);
  ngOnInit() {
    this.apiServices;
  }
}

bootstrapApplication(App, {
  providers: [provideRouter(routes)],
});

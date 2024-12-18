import { Component, ResourceStatus, inject } from '@angular/core';
import { ApiService } from '../../api/apiCall';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
})
export class UsersComponent {
  resourceStatus = ResourceStatus;
  apiService = inject(ApiService);
  usersData = this.apiService.fetchFakeData('users');
}

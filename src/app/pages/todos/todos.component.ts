import { Component, ResourceStatus, inject } from '@angular/core';
import { ApiService } from '../../api/apiCall';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
})
export class TodosComponent {
  resourceStatus = ResourceStatus;
  apiService = inject(ApiService);
  todosData = this.apiService.fetchFakeData('todos');
}

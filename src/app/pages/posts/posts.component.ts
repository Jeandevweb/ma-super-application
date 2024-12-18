import { Component, inject, Input, ResourceStatus } from '@angular/core';
import { ApiService } from '../../api/apiCall';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.component.html',
})
export class PostsComponent {
  apiService = inject(ApiService);
  postsResource = this.apiService.fetchFakeData('posts');
  resourceStatus = ResourceStatus;
}

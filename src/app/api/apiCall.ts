import { Injectable, resource, signal, inject } from '@angular/core';
import { Posts, Users, Todos } from './types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  fetchFakeData = (typeOfPage: string) =>
    resource({
      request: () => typeOfPage,
      loader: async ({ request: searchPage }) => {
        return fetch(
          `https://jsonplaceholder.typicode.com/${searchPage}?_limit=5`
        ).then((res) => res.json() as Promise<Posts[] | Users[] | Todos[]>);
      },
    });

    //Example of simple request
    // postsResource = resource({
    //   loader: async () => {
    //     return fetch('https://jsonplaceholder.typicode.com/posts?_limit=5').then(
    //       (res) => res.json() as Promise<Posts[]>
    //     );
    //   },
    // });
}

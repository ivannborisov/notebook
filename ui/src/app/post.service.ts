import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { POSTS } from './mock-posts';
import { Post } from './post';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postUrl = 'http://localhost:3000/api/posts';

  constructor( private http: HttpClient) { }

  getPosts() : Observable<Post[]> { 
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.get<Post[]>(this.postUrl, httpOptions);
    //return of(POSTS);

  }

  getPost(id: number): Observable<Post> {
    const url = `${this.postUrl}/${id}`;

    return this.http.get<Post>(url)
  //  return of(POSTS.find(post => post.id === id));
  }
}

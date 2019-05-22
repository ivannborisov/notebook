import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from './post';
import { Comment } from './comment';


import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postUrl = 'http://localhost:3000/api/posts';
  private commentUrl = 'http://localhost:3000/api/comments';


  constructor( private http: HttpClient) { }

  getPosts() : Observable<Post[]> { 
    

    return this.http.get<Post[]>(this.postUrl, httpOptions);
    //return of(POSTS);

  }

  getPost(id: number): Observable<Post> {
    const url = `${this.postUrl}/${id}`;

    return this.http.get<Post>(url)
  //  return of(POSTS.find(post => post.id === id));
  }

  addPost (post: Post): Observable<Post> {
    return this.http.post<Post>(this.postUrl, post, httpOptions);
  }

  addComment (comment: Comment, postId: number): Observable<Comment> {
    let data = Object.assign({postId} , comment)
    return this.http.post<Comment>(this.commentUrl, data, httpOptions)
  }
}

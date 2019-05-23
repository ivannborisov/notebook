import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService) { }

  
  ngOnInit() {

    // $(document).ready(()=> {
    //   alert('Ready')
    // })
    this.getPosts();
  }

  getPosts(): void { 
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts.slice(0,3));
  }

}

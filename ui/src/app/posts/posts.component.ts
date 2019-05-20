import { Component, OnInit } from '@angular/core';
import { POSTS } from '../mock-posts';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  title = 'Posts';
  posts = POSTS;
  
  constructor() { }

  ngOnInit() {
  }

}

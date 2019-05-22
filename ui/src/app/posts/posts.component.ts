import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  title = 'Posts';
  posts: Post[];
  
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void { 
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts);
  }

  addPost(post: Object): void {
   
    if (!post) { return; }
    this.postService.addPost(post as Post)
      .subscribe(post => {
        this.posts.push(post);
      });
  }
}

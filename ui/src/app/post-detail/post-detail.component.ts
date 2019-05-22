import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostService} from '../post.service';

import { Post } from '../post';
import { Comment } from '../comment';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  @Input() post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPost();
  }

  goBack(): void {
    this.location.back();
  }

  getPost() : void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id)
      .subscribe(post => this.post = post);
  }

  addComment(comment: Object): void {
   
    if (!comment) { return; }
    this.postService.addComment(comment as Comment, this.post.id)
      .subscribe(comment => {
        console.log(comment)
        this.post.comments.push(comment);
      });
  }
}

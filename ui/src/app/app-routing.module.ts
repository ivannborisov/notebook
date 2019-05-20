import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component'
import { PostDetailComponent }  from './post-detail/post-detail.component';
import { DashboardComponent }   from './dashboard/dashboard.component';


const routes: Routes = [
  {path: 'posts' , component: PostsComponent},
  {path: 'posts/:id', component: PostDetailComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard',  pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

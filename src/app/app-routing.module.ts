import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlbumsComponent } from './albums/albums.component';
import { TasksComponent } from './tasks/tasks.component';
import { PostsComponent } from './posts/posts.component';



const routes: Routes = [
  {path: 'login' ,component:LoginComponent  },
  {path: '' ,component:DashboardComponent  },
  {path: 'album' ,component:AlbumsComponent  },
  {path: 'task' ,component:TasksComponent  },
  {path: 'post' ,component:PostsComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

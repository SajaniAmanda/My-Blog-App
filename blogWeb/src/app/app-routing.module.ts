import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './pages/create-post/create-post.component';
// import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'create-post', component: CreatePostComponent},
  // { path: 'app-component', component: AppComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


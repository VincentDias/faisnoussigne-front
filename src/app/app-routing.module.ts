import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CreateArticleComponent } from './pages/blog/create-article/create-article.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BoardUserComponent } from './jwt-auth/board-user/board-user.component';
import { BoardModeratorComponent } from './jwt-auth/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './jwt-auth/board-admin/board-admin.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MeetComponent } from './pages/meet/meet.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'meet', component: MeetComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'create-article', component: CreateArticleComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },


  { path: '', redirectTo: 'accueil', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

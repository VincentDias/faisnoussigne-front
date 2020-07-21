import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { RencontreComponent } from './pages/rencontre/rencontre.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CreateArticleComponent } from './pages/blog/create-article/create-article.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BoardUserComponent } from './jwt-auth/board-user/board-user.component';
import { BoardModeratorComponent } from './jwt-auth/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './jwt-auth/board-admin/board-admin.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'rencontre', component: RencontreComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'create-article', component: CreateArticleComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },


  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },

  { path: '', redirectTo: 'accueil', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

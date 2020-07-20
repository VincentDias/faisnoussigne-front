import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { RencontreComponent } from './pages/rencontre/rencontre.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CreateArticleComponent } from './pages/blog/create-article/create-article.component';
import { RegisterComponent } from './pages/register/register.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';


const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'rencontre', component: RencontreComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'create-article', component: CreateArticleComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'sign-in', component: SignInComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

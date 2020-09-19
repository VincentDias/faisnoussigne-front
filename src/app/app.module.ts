import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CreateArticleComponent } from './pages/blog/create-article/create-article.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardAdminComponent } from './jwt-auth/board-admin/board-admin.component';
import { BoardModeratorComponent } from './jwt-auth/board-moderator/board-moderator.component';
import { BoardUserComponent } from './jwt-auth/board-user/board-user.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { MeetComponent } from './pages/meet/meet.component';
import { CreateMeetComponent } from './pages/meet/create-meet/create-meet.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';

import { AgmCoreModule } from '@agm/core';
import { FileFormComponent } from './pages/blog/create-article/file-form/file-form.component';
import { UpdateMeetComponent } from './pages/meet/update-meet/update-meet.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogComponent,
    ContactComponent,
    CreateArticleComponent,
    RegisterComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    ProfileComponent,
    LoginComponent,
    MeetComponent,
    CreateMeetComponent,
    HomeComponent,
    FileFormComponent,
    UpdateMeetComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCadLBvMc3PqMiIXgBjXj3ROgzdSoapBiE',
      libraries: ['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavigationComponent} from './modules/navigation/navigation/navigation.component';
import {CreateUserComponent} from "./modules/user/components/create-user/create-user.component";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UserProfileComponent} from './modules/user/components/user-profile/user-profile.component';
import {AppRoutingModule} from "./app-routing.module";
import {PhotoModule} from "./modules/photo/photo.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatCardModule, MatInputModule, MatNativeDateModule} from "@angular/material";
import {FeedModule} from "./modules/feed/feed.module";




const appRoutes: Routes = [
  {
    path: 'my-profile',
    component: UserProfileComponent
  },
  {
    path: 'create-user',
    component: CreateUserComponent
  },
  {
    path: '',
    component: UserProfileComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CreateUserComponent,
    UserProfileComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    AppRoutingModule,
    PhotoModule,
    FeedModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

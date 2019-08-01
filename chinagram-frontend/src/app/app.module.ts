import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {CreateUserComponent} from "./create-user/create-user.component";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UserProfileComponent} from './user-profile/user-profile.component';


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
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

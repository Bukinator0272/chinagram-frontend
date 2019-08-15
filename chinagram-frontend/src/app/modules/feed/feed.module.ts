import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedViewComponent } from './components/feed-view/feed-view.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatNativeDateModule,
  MatProgressSpinnerModule
} from "@angular/material";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [FeedViewComponent],
  imports: [
    CommonModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    InfiniteScrollModule
  ]
})
export class FeedModule { }

export {
  FeedViewComponent
}

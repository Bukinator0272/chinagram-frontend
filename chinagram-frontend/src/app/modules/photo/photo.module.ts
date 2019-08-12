import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoCreateComponent } from './components/photo-create/photo-create.component';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatInputModule} from "@angular/material";
import {PhotoViewComponent} from "./components/photo-view/photo-view.component";


@NgModule({
  declarations: [PhotoCreateComponent, PhotoViewComponent],
  exports: [
    PhotoCreateComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class PhotoModule { }

exports: [
  PhotoCreateComponent,
  PhotoViewComponent
]

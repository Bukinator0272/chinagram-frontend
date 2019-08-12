import {Component, Input, OnInit} from '@angular/core';
import {PhotoService} from "../../services/photo.service";
import {ImageUploadService} from "../../services/image-upload.service";
import {Photo} from "../../model/Photo";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import * as uuid from 'uuid';
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'china-photo-create',
  templateUrl: './photo-create.component.html',
  styleUrls: ['./photo-create.component.less']
})

export class PhotoCreateComponent implements OnInit {
  private selectedFile: File;
  @Input() private currentFileUpload: File;
  private progress: { percentage: number } = {percentage: 0};
  private postedPhoto: Photo = new Photo('');

  constructor(private photoCreateService: PhotoService,
              private imageUploadService: ImageUploadService,
              private router: Router) {
  }

 private postPhoto(): Observable<Photo> {
    this.postedPhoto.id = uuid.v4();
    this.uploadImage();
    return this.photoCreateService.postPhoto(this.postedPhoto);
  }

  private selectFile(event) {
    this.selectedFile = event.target.files[0];
  }

  private uploadImage() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFile;
    this.imageUploadService.pushFileToStorage(this.currentFileUpload, this.postedPhoto.id).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        this.router.navigate(['photos', this.postedPhoto.id]);
      }
    });

    this.selectedFile = undefined;
  }

  ngOnInit() {
  }

}

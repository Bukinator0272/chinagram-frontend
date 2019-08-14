import {Component, OnInit} from '@angular/core';
import {PhotoService} from "../../services/photo.service";
import {Photo} from "../../model/Photo";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {BASE_URL} from "../../../../china-config";

@Component({
  selector: 'china-photo-view',
  templateUrl: './photo-view.component.html',
  styleUrls: ['./photo-view.component.less']
})
export class PhotoViewComponent implements OnInit {
  private BASE_URL: string = BASE_URL;
  private currentPhoto: Photo;
  private currentPhotoId: string;
  private edit: boolean = false;
  private isLoading: boolean = true;

  constructor(private photoCreateService: PhotoService, private route: ActivatedRoute) {
  }

  private getPhoto(id: String) {
    this.photoCreateService.getPhoto(id).subscribe(response => {
      this.currentPhoto = response
      this.isLoading = false;
    });
  }

  ngOnInit() {
    this.currentPhotoId = this.route.snapshot.paramMap.get('id');
    this.getPhoto(this.currentPhotoId);
  }

  private setEditMode(): void {
    this.edit = true;
  }

  private setViewMode(): void {
    this.edit = false;
  }

  private updatePhoto(): Observable<Photo> {
    this.setViewMode();
    return this.photoCreateService.updatePhoto(this.currentPhoto);
  }
}

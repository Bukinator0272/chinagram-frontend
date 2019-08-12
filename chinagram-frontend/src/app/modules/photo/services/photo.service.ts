import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../user/model/user";
import {Observable} from "rxjs";
import {Photo} from "../model/Photo";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  private BASE_URL = "http://localhost:8080";
  private PHOTOS_URL = `${this.BASE_URL}/photos`;


  postPhoto (photo: Photo) : Observable<Photo>{
    return this.http.post<Photo>(this.PHOTOS_URL, photo)
     }

  getPhoto (photoId: String): Observable<Photo>{
    return this.http.get<Photo>(`${this.PHOTOS_URL}/${photoId}`);
  }

  updatePhoto (photo: Photo): Observable<Photo>{
    return this.http.put<Photo>(this.PHOTOS_URL, photo);
  }

}

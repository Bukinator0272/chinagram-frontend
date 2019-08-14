import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Photo} from "../../photo/model/Photo";
import {FEED_URL} from "../../../china-config";


@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) { }

  private FEED_URL = FEED_URL;

   public getFeedData(): Observable<Photo[]>{
    return this.http.get<Photo[]>(`${this.FEED_URL}`);
  }
}

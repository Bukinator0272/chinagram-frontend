import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BASE_URL} from "../../../china-config";
import {Observable} from "rxjs";
import {Photo} from "../../photo/model/Photo";

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) { }

  private FEED_URL = `${BASE_URL}/feed/test`;

   public getFeedData(): Observable<Photo[]>{
    return this.http.get<Photo[]>(`${this.FEED_URL}`);
  }
}

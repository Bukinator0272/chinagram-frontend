import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Photo} from "../../photo/model/Photo";
import {FEED_URL} from "../../../china-config";
import {FEED_URL_SCROLL} from "../../../china-config";
import {Page} from "../model/Page"

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) {
  }

  private FEED_URL = FEED_URL;
  private FEED_URL_SCROLL = FEED_URL_SCROLL;

  public getFeedData(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.FEED_URL}`);
  }

  public getFeedDataScroll(page: Page): Observable<Photo[]> {
    let httpParams = new HttpParams().set('size', page.size.toString()).set('page', page.page.toString())
    return this.http.get<Photo[]>(`${this.FEED_URL_SCROLL}`, {params: httpParams});
  }
}

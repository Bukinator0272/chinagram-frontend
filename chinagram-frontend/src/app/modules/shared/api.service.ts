import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../user/model/user";
import {Observable} from "rxjs";
import {CREATE_USER_URL} from "../../china-config"

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private CREATE_USER_URL = CREATE_USER_URL;

  constructor(private http: HttpClient) {

  }

  postUser (user: User): Observable<User>{
    return this.http.post<User>(this.CREATE_USER_URL, user);
  }

  getUser (userId: String): Observable<Object>{
    return this.http.get(`${this.CREATE_USER_URL}/${userId}`);
  }
}

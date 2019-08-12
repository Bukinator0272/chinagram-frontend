import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../user/model/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = "http://localhost:8080";
  private CREATE_USER_URL = `${this.BASE_URL}/users`;
  private GET_USER_BY_ID_URL = `${this.BASE_URL}/users/`;

  constructor(private http: HttpClient) {

  }

  postUser (user: User): Observable<User>{
    return this.http.post<User>(this.CREATE_USER_URL, user);
  }

  getUser (userId: String): Observable<Object>{
    return this.http.get(`${this.GET_USER_BY_ID_URL}/${userId}`);
  }
}

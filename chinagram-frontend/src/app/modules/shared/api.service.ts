import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../user/model/user";
import {Observable} from "rxjs";
import {BASE_URL} from "../../china-config"

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private CREATE_USER_URL = `${BASE_URL}/users`;
  private GET_USER_BY_ID_URL = `${BASE_URL}/users/`;

  constructor(private http: HttpClient) {

  }

  postUser (user: User): Observable<User>{
    return this.http.post<User>(this.CREATE_USER_URL, user);
  }

  getUser (userId: String): Observable<Object>{
    return this.http.get(`${this.GET_USER_BY_ID_URL}/${userId}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
  private BASE_URL = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File, name: string): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();


    formdata.append('file', file, name + '.jpeg');
    const req = new HttpRequest('POST', this.BASE_URL+'/post', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  getFile(fileName: string): Observable<any>{
    return this.http.get(`files/${fileName}`);
  }

  getFiles(): Observable<any> {
    return this.http.get('/getallfiles');
  }
}

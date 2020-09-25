import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  constructor(private http: HttpClient) { }

  public sendContactFormInfo(body): Observable<any> {
    return this.http.post('http://localhost:8081/send-email', body )
  }
}

import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Observable } from 'rxjs/Observable';

@Injectable ({ providedIn : 'root' })
export class LoginService {

  constructor(private http: HttpClient) { }

  sendCredential(username: string , password: string){

  let url = "http://localhost:8181/token";
  let encodedCredentials = btoa(username + ":" + password);
  let basicHeader = "Basic " + encodedCredentials;
  let headers = new HttpHeaders ({
  		'Content-Type' : 'application/x-www-form-urlencoded',
  		'Authorization' : basicHeader
  });

  return this.http.get(url, {headers: headers});
  }
}

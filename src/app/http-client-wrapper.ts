import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FacebookService} from "ngx-facebook";

@Injectable()
export class HttpClientWrapper {

  constructor(private http: HttpClient, private fb: FacebookService) {}

  createAuthorizationHeader(headers: HttpHeaders) {
    console.log(this.fb.getAuthResponse().accessToken);
    headers.set('Authorization', 'Bearer ' + this.fb.getAuthResponse().accessToken);
  }

  get(url) {
    let headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

}

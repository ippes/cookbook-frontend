import {Component} from '@angular/core';
import {FacebookService, InitParams, LoginResponse} from "ngx-facebook";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private fb: FacebookService, private http: HttpClient) {
    let initParams: InitParams = {
      appId: '1975761942496381',
      xfbml: true,
      version: 'v2.8'
    };
    fb.init(initParams);
  }

  loginWithFacebook(): void {
    this.fb.login()
      .then((response: LoginResponse) => {
        console.log(response);
        this.authenticate();
      })
      .catch((error: any) => console.error(error));
  }

  authenticate() {
    this.http.get('https://localhost:8443/user').subscribe(response => {
      if (response['name']) {
        this.http.get('https://localhost:8443/cool-cars').subscribe(data => console.log(data));
      } else {
      }
    }, error => {
      console.log(error);
    });


  }
}

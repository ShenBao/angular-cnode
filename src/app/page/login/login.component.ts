import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // 登录状态
  status: boolean = false;

  AccessToken: string;

  constructor() { }

  ngOnInit() {
  }


  onSubmit() {
    console.log(this.AccessToken);
    if (this.AccessToken && this.AccessToken.length > 0) {
      
    }
  }

  reqAccessToken() {

  }



}

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss']
})
export class SignOutComponent implements OnInit {

  constructor(
    private location: Location,
    private router: Router
  ) {}

  signOut(): void {
    // 清楚本地存储

    setTimeout(()=>{
      // this.location.back();
      console.log('清除登录信息')
      this.router.navigate([`/home`]);
    },300);
    
  }

  ngOnInit() {
  }

}

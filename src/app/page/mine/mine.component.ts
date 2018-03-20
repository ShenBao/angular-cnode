import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.scss']
})
export class MineComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {
  }

  toUser() {
    console.log(0)
    if (localStorage.angular_cnode_accesstoken && localStorage.angular_cnode_self) {
      let userName = localStorage.angular_cnode_self.loginname;
      this.router.navigate([`/user/${userName}`]);
    } else {
      this.router.navigate([`/login`]);
    }

  }

}

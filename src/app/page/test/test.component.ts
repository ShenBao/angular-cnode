import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private router: Router) { }  

  activeName:string = 'publish';
  list: Array<Object> = [
    {
      title: '首页',
      name: 'home',
      icon: 'icon-index'
    },
    {
      title: '发表',
      name: 'publish',
      icon: 'icon-edit'
    },
    {
      title: '消息',
      name: 'message',
      icon: 'icon-msg'
    },
    {
      title: '我的',
      name: 'mine',
      icon: 'icon-user'
    }
  ];

  toRouter(routerName:string){
    this.router.navigate([`/${routerName}`]);
  }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  @Input()
  activeName: string;

  list: Array<Object> = [
    {
      name: 'home',
      title: '首页',
      icon: 'icon-index'
    },
    {
      name: 'publish',
      title: '发表',
      icon: 'icon-edit'
    },
    // {
    //   name: 'message',
    //   title: '消息',
    //   icon: 'icon-msg'
    // },
    {
      name: 'mine',
      title: '我的',
      icon: 'icon-user'
    }
  ];

  ngOnInit() {
  }

}

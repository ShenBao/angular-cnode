import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @Input()
  public activeTab: string = '';

  tabs: Array<Object> = [
    {
      title: '全部',
      tab: 'all'
    },
    {
      title: '精华',
      tab: 'good'
    },
    {
      title: '分享',
      tab: 'share'
    },
    {
      title: '问答',
      tab: 'ask'
    },
    {
      title: '招聘',
      tab: 'job'
    },
    {
      title: '测试',
      tab: 'dev'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toRouter(routerName: string) {
    this.activeTab = routerName;
    this.router.navigate([`home/${routerName}`]);

  }

}

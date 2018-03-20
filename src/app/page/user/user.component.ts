import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/switchMap';
import { Observable } from "rxjs";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  reqUrl: string = 'https://cnodejs.org/api/v1/user/';

  // 用户名
  userName: string;
  title: string = '个人资料';
  // 是否请求中
  public isLoading: boolean = true;
  // 是否存在  默认为存在
  public isExistence: boolean = true;
  // 成功之后的数据
  public data: Observable<any>;

  public topicsList: Array<Object>;

  public index: number = 0;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private http: HttpClient,
  ) {

    ActivatedRoute.params.subscribe((params: Params) => {
      console.log(params["username"])
      this.userName = params["username"];
    });

  }

  ngOnInit() {

    this.http.get(`${this.reqUrl}${this.userName}`)
      .subscribe(
      res => {
        console.log(res['data'])
        if (res['success'] === true) {
          this.isLoading = false;
          this.data = res['data'];
          this.topicsList = res['data'].recent_replies;
          this.title = `${res['data'].loginname} - 个人资料`
        } else {
          this.isLoading = false;
          this.isExistence = false;
        }
      },
      err => {
        console.log(err);
        this.isLoading = false;
        this.isExistence = false;
      },
      () => {
        console.log("done");
      }
      );

  }

  setChange(index): void {
    if (!this.data['recent_topics']) {
      return;
    }
    if (index == 0) {
      this.topicsList = this.data['recent_replies'];
    } else {
      this.topicsList = this.data['recent_topics'];
    }
    this.index = index == 0 ? 0 : 1;
  }

}
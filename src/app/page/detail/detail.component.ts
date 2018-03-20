import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/switchMap';
import { Observable } from "rxjs";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  reqUrl: string = 'https://cnodejs.org/api/v1/topic/';
  // 帖子id
  public topicId: string;
  public title: string = '详情页';
  // 是否请求中
  public isLoading: boolean = true;
  // 是否存在  默认为存在
  public isExistence: boolean = true;
  // 成功之后的数据
  public data: Observable<any>;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private http: HttpClient,
  ) {

    ActivatedRoute.params.subscribe((params: Params) => {
      this.topicId = params["id"];
    });

  }

  ngOnInit() {

    console.log(this.topicId);
    this.http.get(`${this.reqUrl}${this.topicId}`)
      .subscribe(
      res => {
        console.log(res['data'])
        if (res['success'] === true) {
          this.isLoading = false;
          this.data = res['data'];
          this.title = res['data'].title;
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

}

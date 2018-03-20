import { Component, OnInit, OnChanges, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { URLSearchParams } from '@angular/http';


import 'rxjs/add/operator/switchMap';
import { Observable } from "rxjs";

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit, OnChanges {

  activeTab: string;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private http: HttpClient,
  ) {

    ActivatedRoute.params.subscribe((params: Params) => {

      console.log(params["tabName"]);
      if (this.activeTab != params["tabName"]) {
        this.activeTab = params["tabName"];
        // 是否请求中
        this.isLoading = true;
        // 是否还有数据
        this.isExistenceData = true;
        this.reqData();
      }
    });

  }

  ngOnInit() {

    // this.reqData();

  }

  ngOnChanges() {
    console.log(0)
  }

  reqUrl: string = 'https://cnodejs.org/api/v1/topics?tab=';
  // 是否请求中
  public isLoading: boolean = true;
  // 是否还有数据
  public isExistenceData: boolean = true;
  // 成功之后的数据
  private data: Observable<any>;

  reqData() {
    let tabs = this.activeTab === 'all' ? '' : this.activeTab;

    this.http.get(`${this.reqUrl}${tabs}`)
      .subscribe(
      res => {
        console.log(res['data'])
        if (res['success'] === true) {
          this.isLoading = false;
          this.data = res['data'];
        } else {
          this.isLoading = false;
          this.isExistenceData = false;
        }
      },
      err => {
        console.log(err);
        this.isLoading = false;
        // this.isExistenceData = false;
      },
      () => {
        console.log("done");
      }
      );
  }

}

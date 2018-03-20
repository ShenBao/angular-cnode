import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Observable } from "rxjs";

@Component({
  selector: 'app-detail-content',
  templateUrl: './detail-content.component.html',
  styleUrls: ['./detail-content.component.scss']
})
export class DetailContentComponent implements OnInit {

  @Input()
  public data;

  constructor() { }

  ngOnInit() {
  }

}

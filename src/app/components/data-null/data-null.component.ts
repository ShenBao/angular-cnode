import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-data-null',
  templateUrl: './data-null.component.html',
  styleUrls: ['./data-null.component.scss']
})
export class DataNullComponent implements OnInit {

  @Input()
  msg:string = '暂无记录';

  constructor() { }

  ngOnInit() {
  }

}

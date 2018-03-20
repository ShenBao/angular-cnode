import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss']
})
export class TopicsListComponent implements OnInit {

  @Input()
  topicsList: Array<Object>;

  constructor() { }

  ngOnInit() {
  }

}

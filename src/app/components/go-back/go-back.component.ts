import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-go-back',
  templateUrl: './go-back.component.html',
  styleUrls: ['./go-back.component.scss']
})
export class GoBackComponent implements OnInit {

  constructor(
    private location: Location
  ) {

  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  }

}

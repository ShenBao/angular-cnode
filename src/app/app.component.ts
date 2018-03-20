import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Angular CNode';

  constructor() {

    setTimeout(()=>{
      document.querySelector('.app-loading').className += ' app-loading-hide';
    },1000);

  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'itp-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
    // window.scrollTo(0, 0);
  }

}

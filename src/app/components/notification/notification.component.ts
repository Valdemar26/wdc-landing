import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wdc-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input() config;
  @Output() output = new EventEmitter();

  constructor() { }

  public ngOnInit(): void {
    console.log('config: ', this.config);
  }

}

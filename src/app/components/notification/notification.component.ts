import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { NotificationConfigInterface } from '../../interfaces/notification-config.interface';
import { LandingService } from '../../services/landing.service';

@Component({
  selector: 'itp-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input() config: NotificationConfigInterface;
  @Output() output = new EventEmitter();

  constructor(private landingService: LandingService) { }

  public ngOnInit(): void {
    console.log('config: ', this.config);
  }

  public closeNotification(): void {
    this.landingService.closeNotification();
  }
}

import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LandingService } from '../../services/landing.service';
import { NotificationComponent } from '../notification/notification.component';
import { NotificationConfigInterface } from '../../interfaces/notification-config.interface';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'itp-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss']
})
export class GetInTouchComponent implements OnInit, OnDestroy {

  @ViewChild('notification', {read: ViewContainerRef}) notification: ViewContainerRef;
  componentRef: ComponentRef<NotificationComponent>;

  contactForm: FormGroup;
  isVisible: boolean;
  scrolled: number;
  pageHeight: number;

  @HostListener('window:scroll', ['$event'])
  checkScrolled(): void {
    this.scrolled = window.pageYOffset;

    this.isVisible = this.scrolled > this.pageHeight / 2;
  }

  constructor(
    private landingService: LandingService,
    private resolver: ComponentFactoryResolver,
    private notificationService: NotificationService
  ) {
    this.initContactForm();
  }


  public ngOnInit(): void {
    this.getPageHeight();
  }

  public submit(): void {
    console.log(this.contactForm.value);
    this.contactForm.reset();

    const config: NotificationConfigInterface = {
      label: 'Message send successfully!',
      color: 'green',
      timeout: 4000
    };

    const customConfig: NotificationConfigInterface = {
      label: 'Custom Notification',
      color: 'red',
      timeout: 4000
    };

    this.createDynamicNotification(config);
    this.notificationService.open(customConfig);

    setTimeout(() => {
      this.destroyNotification();
    }, config.timeout);
  }

  public scrollToTop(): void {
    this.landingService.smoothScrollToTop();
  }

  public ngOnDestroy(): void {
    this.destroyNotification();
  }

  private destroyNotification(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  private getPageHeight(): void {
    const body = document.querySelector('body');
    this.pageHeight = body.getBoundingClientRect().height;
  }

  private initContactForm(): void {
    this.contactForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      userEmail: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      userPhone: new FormControl('', Validators.pattern('[0-9]{10}')),
      message: new FormControl('', Validators.minLength(50))
    },
{updateOn: 'blur'});
  }

  private createDynamicNotification(config?): void {
    this.notification.clear();

    const factory: ComponentFactory<NotificationComponent> = this.resolver.resolveComponentFactory(NotificationComponent);
    this.componentRef = this.notification.createComponent(factory);

    this.componentRef.instance.config = config;

    this.componentRef.instance.output.subscribe((event) => console.log('output event: ', event));
  }

}

import {
  ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef,
  Injectable, Injector, Inject, Renderer2, RendererFactory2
} from '@angular/core';

import { DOCUMENT } from '@angular/common';

import { Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

import { NotificationComponent } from '../components/notification/notification.component';
import { NotificationConfigInterface } from '../interfaces/notification-config.interface';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private dialogContainer: ComponentRef<NotificationComponent>;
  private renderer: Renderer2;

  private dialogResult: Subject<any> = new Subject();

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private rendererFactory: RendererFactory2,
    private appRef: ApplicationRef,
    @Inject(DOCUMENT) private document: Document
  ) { }

  public open(dialogConfig: NotificationConfigInterface): Observable<any> {
    console.log('open: ', dialogConfig);

    this.dialogContainer = this.resolver.resolveComponentFactory(NotificationComponent)
      .create(this.injector);

    this.appRef.attachView(this.dialogContainer.hostView);
    const domElement = (this.dialogContainer.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    this.renderer.appendChild(this.document.body, domElement);

    return this.dialogResult.asObservable().pipe(take(1));
  }

  public close(result?: any): void {
    this.dialogContainer.destroy();
    this.dialogContainer = null;

    this.dialogResult.next(result);
  }
}

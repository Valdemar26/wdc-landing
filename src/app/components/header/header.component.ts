import { trigger, state, style, transition, animate } from '@angular/animations';
import { AfterViewInit, Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { throttleTime, map, pairwise, distinctUntilChanged, share, filter, takeUntil } from 'rxjs/operators';

import { LandingService } from '../../services/landing.service';

enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden'
}

enum Direction {
  Up = 'Up',
  Down = 'Down'
}

@Component({
  selector: 'itp-header',
  templateUrl: './header.component.html',
  animations: [
    trigger('toggle', [
      state(
        VisibilityState.Hidden,
        style({ opacity: 0, transform: 'translateY(-100%)' })
      ),
      state(
        VisibilityState.Visible,
        style({ opacity: 1, transform: 'translateY(0)' })
      ),
      transition('* => *', animate('200ms ease-in'))
    ])
  ],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  private isVisible = true;

  public menuList: string[];
  public activeMenuItem: number;

  @HostBinding('@toggle')
  get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  constructor(private landingService: LandingService) { }

  public ngOnInit(): void {
    this.menuList = ['Home', 'About', 'Services', 'Strategy', 'Portfolio', 'Contact Us', 'Blog'];
  }

  public ngAfterViewInit(): void {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share(),
      takeUntil(this.ngUnsubscribe)
    );

    const goingUp$ = scroll$.pipe(
      filter(direction => direction === Direction.Up)
    );

    const goingDown$ = scroll$.pipe(
      filter(direction => direction === Direction.Down)
    );

    goingUp$
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(() => (this.isVisible = true));

    goingDown$
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(() => (this.isVisible = false));
  }

  public scrollToSection(item, index): string {

    if (index === 6) {
      this.redirectToBlog();
    } else {
      this.activeMenuItem = index;

      if (item === 'Contact Us') {
        this.landingService.smoothScroll('touch');
        return;
      }

      this.landingService.smoothScroll(item.toLowerCase());
    }

  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private redirectToBlog(): void {
    window.open('https://angular-blog-ua.firebaseapp.com/', '_blank');
  }
}

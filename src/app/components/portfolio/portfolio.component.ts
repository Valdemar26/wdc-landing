import {AfterViewInit, Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {fromEvent, Subject} from 'rxjs';
import {distinctUntilChanged, filter, map, pairwise, share, takeUntil, throttleTime} from 'rxjs/operators';

enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden'
}

enum Direction {
  Up = 'Up',
  Down = 'Down'
}

@Component({
  selector: 'itp-portfolio',
  templateUrl: './portfolio.component.html',
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
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, AfterViewInit, OnDestroy {

  private ngUnsubscribe = new Subject();
  private isVisible = true;

  @HostBinding('@toggle')
  get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  constructor(private router: Router) { }

  public ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  public backToHome(): void {  // todo move to service
    this.router.navigate(['/main']);
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

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}

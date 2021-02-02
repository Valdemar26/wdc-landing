import { AfterViewInit, Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Meta, Title } from '@angular/platform-browser';

import { fromEvent, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, pairwise, share, takeUntil, throttleTime } from 'rxjs/operators';


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

  public examples = [];

  private ngUnsubscribe = new Subject();
  private isVisible = true;

  @HostBinding('@toggle')
  get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  constructor(
    private title: Title,
    private meta: Meta
  ) {
    title.setTitle('ITPossible Portfolio | Experienced Angular Team');

    meta.addTags([
      { name: 'keywords', content: 'angular, web, studio, it-ukraine, it company, Angular 8, Angular 9, itpossible, portfolio'},
      { name: 'description', content: '★ITPossible web studio - Web Development Angular Team | Portfolio★'}
    ]);
  }

  public ngOnInit(): void {
    window.scrollTo(0, 0);
    this.initExamples();

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

  public openPortfolioExample(url): void {
    window.open(url, '_blank');
  }

  private initExamples(): void {
    this.examples = [
      {
        imagePath: './../../../assets/images/films.png',
        title: 'Films',
        subtitle: 'Catalog',
        description: `Project on Angular10, using 'themoviedb api' for data. With possibility to sort, add to favorite or remove films. Data communications on RxJS streams.`,
        type: '1'
      },
      {
        imagePath: './../../../assets/images/portfolio_1.png',
        title: 'AVA',
        subtitle: 'Mountain',
        description: 'Branding for a travel agency.',
        type: '2'
      },
      {
        imagePath: './../../../assets/images/building_landing.png',
        title: 'Cottages',
        subtitle: 'Landing',
        description: 'Landing page for RealEstate company. Flexible degign using flexbox. Split on Angular 8 component to make landing faster.',
        type: '1'
      },
      {
        imagePath: './../../../assets/images/portfolio_2.png',
        title: 'Aqua',
        subtitle: 'Lab',
        description: 'Design for a aqua laboratory. Include creating landing page.',
        type: '2'
      },
      {
        imagePath: './../../../assets/images/startup.png',
        title: 'Startup',
        subtitle: 'Finder',
        description: 'Website to find and present Startups on conference.',
        type: '1'
      },
      {
        imagePath: './../../../assets/images/scores-pro.png',
        title: 'Scores',
        subtitle: 'Pro',
        description: 'Sport events live-scores website',
        type: '1'
      }
    ];
  }
}

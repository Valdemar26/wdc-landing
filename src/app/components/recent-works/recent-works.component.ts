import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'itp-recent-works',
  templateUrl: './recent-works.component.html',
  styleUrls: ['./recent-works.component.scss']
})
export class RecentWorksComponent implements OnInit {
  activeButton = 0;
  buttons = [];
  examples = [];

  constructor(private router: Router) { }

  public ngOnInit(): void {
    this.initButtons();
    this.initExamples();
  }

  public makeActive(index: number): void {
    this.activeButton = index;
  }

  private initButtons(): void {
    this.buttons = ['All', 'Web', 'Design'];
  }

  private initExamples(): void {
    this.examples = [
      {
        imagePath: './../../../assets/images/films.png',
        title: 'Films Catalog',
        description: `Project on Angular10, using 'themoviedb api' for data. With possibility to sort, add to favorite or remove films. Data communications on RxJS streams.`,
        type: '1'
      },
      {
        imagePath: './../../../assets/images/portfolio_1.png',
        title: 'AVA Mountain',
        description: 'Branding for a travel agency.',
        type: '2'
      },
      {
        imagePath: './../../../assets/images/building_landing.png',
        title: 'Cottages',
        description: 'Landing page for RealEstate company. Flexible degign using flexbox. Split on Angular 8 component to make landing faster.',
        type: '1'
      },
      {
        imagePath: './../../../assets/images/portfolio_2.png',
        title: 'Aqua Lab',
        description: 'Design for a aqua laboratory. Include creating landing page.',
        type: '2'
      },
      {
        imagePath: './../../../assets/images/startup.png',
        title: 'Startup Finder',
        description: 'Website to find and present Startups on conference.',
        type: '1'
      },
      {
        imagePath: './../../../assets/images/scores-pro.png',
        title: 'Scores Pro',
        description: 'Sport events live-scores website',
        type: '1'
      },
    ];
  }

  public navigateToPortfolio(): void {
    this.router.navigate(['/portfolio']);
  }
}

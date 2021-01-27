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
        imagePath: './../../../assets/images/project1.jpg',
        title: 'Films Catalog',
        description: 'Description for project 1'
      },
      {
        imagePath: './../../../assets/images/project2.jpg',
        title: 'Project 2',
        description: 'Description for project 2'
      },
      {
        imagePath: './../../../assets/images/project4.jpg',
        title: 'Project 3',
        description: 'Description for project 3'
      }
    ];
  }

  public navigateToPortfolio(): void {
    this.router.navigate(['/portfolio']);
  }
}

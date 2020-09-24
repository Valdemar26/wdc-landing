import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LandingService } from '../../services/landing.service';

@Component({
  selector: 'itp-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss']
})
export class WhatWeDoComponent implements OnInit {

  constructor(
    private router: Router,
    private landingService: LandingService
  ) { }

  public ngOnInit(): void {
  }

  public scrollToElement(target: string): void {
    this.landingService.smoothScroll(target);
  }

  public navigateToAboutUsPage(): void {
    this.router.navigate(['/about-us']);
  }
}

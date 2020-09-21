import { Component, OnInit } from '@angular/core';

import { LandingService } from '../../services/landing.service';

@Component({
  selector: 'itp-header-slider',
  templateUrl: './header-slider.component.html',
  styleUrls: ['./header-slider.component.scss']
})
export class HeaderSliderComponent implements OnInit {

  public slides = [];

  constructor(private landingService: LandingService) { }

  public ngOnInit(): void {
    this.initSlides();
  }

  slider(): void {

  }

  public scrollToElement(target): void {
    this.landingService.smoothScroll(target);
  }

  private initSlides(): void {
    this.slides = [
      { src: './../../../assets/images/slider1.jpg' },
      { src: './../../../assets/images/slider2.png' },
      { src: './../../../assets/images/slider3.jpg' }
    ];
  }
}

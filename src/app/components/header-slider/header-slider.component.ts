import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wdc-header-slider',
  templateUrl: './header-slider.component.html',
  styleUrls: ['./header-slider.component.scss']
})
export class HeaderSliderComponent implements OnInit {

  public slides = [];

  constructor() { }

  ngOnInit(): void {
    this.slides = [
      { src: './../../../assets/images/slider1.jpg' },
      { src: './../../../assets/images/slider2.png' },
      { src: './../../../assets/images/slider3.jpg' }
    ];
  }

  slider(): void {

  }
}

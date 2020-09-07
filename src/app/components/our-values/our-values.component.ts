import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wdc-our-values',
  templateUrl: './our-values.component.html',
  styleUrls: ['./our-values.component.scss']
})
export class OurValuesComponent implements OnInit {

  startIndex = 0;
  slides = [];

  constructor() { }

  public ngOnInit(): void {
    this.initSlides();
    this.repeat();
  }

  public slide(): void {
    const slides = Array.from(document.getElementsByClassName('wdc-show-slide'));
    if (slides === []) {
      this.repeat();
    }
    for (const x of slides) {
      const y = x as HTMLElement;
      y.style.display = 'none';
    }
    if (this.startIndex > slides.length - 1) {
      this.startIndex = 0;
      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    } else {

      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    }
  }

  private initSlides(): void {
    this.slides = [
      {
        imagePath: 'http://lorempixel.com/output/nightlife-q-c-640-480-4.jpg',
        text: 'Slide 1, custom text'
      },
      {
        imagePath: 'http://lorempixel.com/output/nightlife-q-c-640-480-2.jpg',
        text: 'Slide 2, text text'
      },
      {
        imagePath: 'http://lorempixel.com/output/nightlife-q-c-640-480-6.jpg',
        text: 'Slide 3, text some text'
      }
    ];
  }

  private repeat(): void {
    setTimeout(() => {
      this.slide();
      this.repeat();
    }, 3000);
  }

}

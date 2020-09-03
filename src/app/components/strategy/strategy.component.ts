import { Component, OnInit } from '@angular/core';

import { StrategyListInterface } from '../../interfaces/strategy-list.interface';

@Component({
  selector: 'wdc-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.scss']
})
export class StrategyComponent implements OnInit {

  strategyList: StrategyListInterface[];

  constructor() { }

  ngOnInit(): void {
    this.initStrategyList();
  }

  initStrategyList(): void {
    // todo rewrite to *ngFor and use strategyList data-object
    this.strategyList = [
      {
        counterNumber: '01',
        counterText: 'Strategy',
        iconsImagePath: '../../../assets/images/step1.png',
        iconsArrowPath: '../../../assets/images/right_arrow.png',
        text: 'Pellentesque at varius purus. Ut ex turpis, fermentum eget purus eget, suscipit dictum lorem. Sed iaculis\n' +
        '          dapibus metus ac cursus. Praesent et tincidunt dolor. Sed pretium nibh a erat scelerisque, ut vestibulum\n' +
        '          est tincidunt. Mauris suscipit lacus lectus.'
      },
      {
        counterNumber: '01',
        counterText: 'Design',
        iconsImagePath: '../../../assets/images/step2.png',
        iconsArrowPath: '../../../assets/images/left-arrow.png',
        text: 'Pellentesque ligula quam, finibus eu urna eget, molestie bibendum nulla. Duis accumsan aliquam ipsum quis\n' +
        '          gravida. Nullam accumsan condimentum quam, in finibus quam aliquam vitae.'
      },
      {
        counterNumber: '03',
        counterText: 'Develope',
        iconsImagePath: '../../../assets/images/step3.png',
        iconsArrowPath: '../../../assets/images/right_arrow.png',
        text: 'Donec semper commodo leo, ut eleifend odio aliquet eget. Nullam euismod turpis ultrices,\n' +
        '          finibus enim non, luctus massa.'
      },
      {
        counterNumber: '04',
        counterText: 'Support',
        iconsImagePath: '../../../assets/images/step4.png',
        iconsArrowPath: '../../../assets/images/left-arrow.png',
        text: 'We define your competition and target audience. Discover what is working in your online industry,\n' +
        '          then design your website accordingly.'
      }
    ];
  }

}

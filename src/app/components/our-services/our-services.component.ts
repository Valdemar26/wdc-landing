import { Component, OnInit } from '@angular/core';

import { CardsListInterface } from '../../interfaces/cards-list.interface';
import { DeferLoadDirective } from '../../directives/defer-load.directive';


@Component({
  selector: 'wdc-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {

  cardsList: CardsListInterface[];
  showMyElement: boolean;

  constructor() { }

  public ngOnInit(): void {
    this.initCardsList();
  }

  private initCardsList(): void {
    this.cardsList = [
      {
        title: 'Web Design',
        imagePath: './../../../assets/images/1.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias error harum iusto obcaecati odit officiis' +
        ' repellat rerum tenetur ut veniam.'
      },
      {
        title: 'Web Development',
        imagePath: './../../../assets/images/2.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias error harum iusto obcaecati odit officiis' +
        ' repellat rerum tenetur ut veniam.'
      },
      {
        title: 'Android App',
        imagePath: './../../../assets/images/3.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias error harum iusto obcaecati odit officiis' +
        ' repellat rerum tenetur ut veniam.'
      },
      {
        title: 'Branding',
        imagePath: './../../../assets/images/4.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias error harum iusto obcaecati odit officiis' +
        ' repellat rerum tenetur ut veniam.'
      },
      {
        title: 'SEO Optimization',
        imagePath: './../../../assets/images/5.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias error harum iusto obcaecati odit officiis' +
        ' repellat rerum tenetur ut veniam.'
      },
      {
        title: 'Ecommerce',
        imagePath: './../../../assets/images/6.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias error harum iusto obcaecati odit officiis' +
        ' repellat rerum tenetur ut veniam.'
      }
    ];
  }


}

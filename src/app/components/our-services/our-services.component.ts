import { Component, OnInit } from '@angular/core';

import { CardsListInterface } from '../../interfaces/cards-list.interface';
import { DeferLoadDirective } from '../../directives/defer-load.directive';


@Component({
  selector: 'itp-our-services',
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
        title: 'Landing Pages for Start-ups',
        imagePath: './../../../assets/images/1.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias error harum iusto obcaecati odit officiis' +
        ' repellat rerum tenetur ut veniam.'
      },
      {
        title: 'Angular Web Development',
        imagePath: './../../../assets/images/2.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias error harum iusto obcaecati odit officiis' +
        ' repellat rerum tenetur ut veniam.'
      },
      {
        title: 'UX/UI Design for all Devices',
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
        title: 'Support & Maintenance',
        imagePath: './../../../assets/images/6.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias error harum iusto obcaecati odit officiis' +
        ' repellat rerum tenetur ut veniam.'
      }
    ];
  }


}

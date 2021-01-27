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

    // TODO check cool website https://asperbrothers.com/angular-js-web-development/

    this.cardsList = [
      {
        title: 'Landing Pages for Startups',
        imagePath: './../../../assets/images/1.png',
        content: `A simple way to test your Idea is to put it into a well designed Landing Page  format, showing all` +
          ` the key points and functions of your Idea, then market that landing page with an email collection box.`
      },
      {
        title: 'Angular Web Development',
        imagePath: './../../../assets/images/2.png',
        content: 'With Angular the whole project is shorter and smoother, which at the end of the day makes you cut' +
          ' costs and enjoy spectacular results.'
      },
      {
        title: 'UX/UI Design for all Devices',
        imagePath: './../../../assets/images/ux-ui-logo.svg',
        content: 'Design principles change from device to device. You can’t use the same rules you follow while' +
          ' designing an iPhone app when you’re designing one for the web or a tablet.'
      },
      {
        title: 'Branding',
        imagePath: './../../../assets/images/4.png',
        content: 'We analyze your business and synthesize it into a Brand.'
      },
      {
        title: 'SEO Optimization',
        imagePath: './../../../assets/images/5.png',
        content: 'The higher you rank in results pages, the more clicks and traffic your site will generate. SEO also' +
          ' improves user experience, making it more likely for customers to become repeat buyers.'
      },
      {
        title: 'Support & Maintenance',
        imagePath: './../../../assets/images/6.png',
        content: 'Your website is valuable to your Business. It must work well and be maintained to attract new ' +
          'customers. Contact us today to discuss how we can help you to run your website smoothly and increase' +
          ' your conversions.'
      }
    ];
  }


}

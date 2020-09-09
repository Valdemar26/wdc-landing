import { Component, OnInit } from '@angular/core';

import { LandingService } from '../../services/landing.service';

@Component({
  selector: 'wdc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuList;
  activeMenuItem: number;

  constructor(private landingService: LandingService) { }

  ngOnInit(): void {
    this.menuList = ['Home', 'About', 'Services', 'Strategy', 'Portfolio', 'Reviews', 'Contact Us'];
  }

  public scrollToSection(item, index): string {
    this.activeMenuItem = index;

    if (item === 'Contact Us') {
      this.landingService.smoothScroll('touch');
      return;
    }

    this.landingService.smoothScroll(item.toLowerCase());
  }
}

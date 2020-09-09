import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wdc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuList;

  constructor() { }

  // todo add smooth scroll
  ngOnInit(): void {
    this.menuList = ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact Us'];
  }

}

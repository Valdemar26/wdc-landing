import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'itp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private title: Title,
    private meta: Meta
  ) {
    title.setTitle('ITPossible WebStudio | Experienced Angular Team');

    meta.addTags([
      { name: 'keywords', content: 'angular, web, studio, it-ukraine, it company, Angular 8, Angular 9, itpossible'},
      { name: 'description', content: '★ITPossible web studio - Experienced Angular Team★'}
    ]);
  }

}

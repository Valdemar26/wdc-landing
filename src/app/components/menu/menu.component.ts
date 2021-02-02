import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'itp-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(private router: Router) { }

  public backToHome(): void {
    this.router.navigate(['/main']);
  }

}

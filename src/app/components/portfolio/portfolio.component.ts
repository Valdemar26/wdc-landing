import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'itp-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private router: Router) { }

  public ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  public backToHome(): void {  // todo move to service
    this.router.navigate(['/main']);
  }

}

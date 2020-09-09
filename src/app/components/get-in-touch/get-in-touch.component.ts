import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LandingService } from '../../services/landing.service';

@Component({
  selector: 'wdc-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss']
})
export class GetInTouchComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private landingService: LandingService) {
    this.contactForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      userEmail: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      userPhone: new FormControl('', Validators.pattern('[0-9]{10}')),
      message: new FormControl('', Validators.minLength(50))
    });
  }

  // todo add dynamic-component notification if form successfully send
  public ngOnInit(): void {
  }

  public submit(): void {
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }

  public scrollToTop(): void {
    this.landingService.smoothScrollToTop();
  }

  }

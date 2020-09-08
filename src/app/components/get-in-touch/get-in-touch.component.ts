import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'wdc-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss']
})
export class GetInTouchComponent implements OnInit {

  contactForm: FormGroup;

  constructor() {
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

  public ngOnInit(): void {
  }

  public submit(): void {
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }

}

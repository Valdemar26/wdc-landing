import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor() { }

  public smoothScroll(target): void {
    const elementToScroll = document.getElementById(target);
    elementToScroll.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }
}

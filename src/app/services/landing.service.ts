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

  public smoothScrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  public closeNotification(): void {
    // todo create logic to 'close notification' from everywhere
    console.log('close notification');
  }
}

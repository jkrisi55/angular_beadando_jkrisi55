/*
 * <<licensetext>>
 */

import { Injectable } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SaveLastUrlService {
  currentURL: string = '';
  constructor(private router: Router) { }

  saveUrl() {
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          localStorage.setItem('prev_url', this.router.url)
          console.log(this.router.url);
        }
      }
    ); 
  }

}

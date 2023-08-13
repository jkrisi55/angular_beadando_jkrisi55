/*
 * <<licensetext>>
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogUrlService } from 'src/app/log-url.service';
import { RouterService } from 'src/app/_services/router.service';
@Component({
  selector: 'app-task4-b',
  templateUrl: './task4-b.component.html',
  styleUrls: ['./task4-b.component.less']
})

export class Task4BComponent implements OnInit {
  previousURL: string = '';
  currentURL: string = '';
  constructor(private router: Router, public routeService: RouterService) {
  }
  ngOnInit(): void {
    /*
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.previousURL = this.currentURL;
          this.currentURL = event.url;
          localStorage.setItem('prev_url', this.previousURL)
          console.log(this.previousURL);
          // Prints the previous URL you visited
          // Eg:- /login          
        }
      }
    );
    */
  }
  // Add other stuff
}

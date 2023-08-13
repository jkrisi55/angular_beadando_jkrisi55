import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {PageRoutes} from "src/app/_constants/page-routes";
import { SaveLastUrlService } from '../save-last-url.service';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  constructor(private route: ActivatedRoute,
              private location: Location,
              private lastUrlService: SaveLastUrlService,
              private router: Router) { }

  routeToSummary() {
    this.router.navigateByUrl(
      `/${PageRoutes.summary}`
    );
    this.lastUrlService.saveUrl();
  }

  routeToTask(index: number, task?: 'A' | 'B') {
    this.router.navigateByUrl(
      `/${PageRoutes.task}/${index}${task ? ('/' + task) : ''}`
    );
    this.lastUrlService.saveUrl();
  }

  routeToTaskWithoutReload(index: number, task?: 'A' | 'B') {
    const url = this.router
      .createUrlTree(
        task ? [PageRoutes.task, index, task] : ['task', index],
        {relativeTo: this.route}
      ).toString()
    this.router.navigateByUrl(url);
    this.lastUrlService.saveUrl();
  }
}

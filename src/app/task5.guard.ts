/*
 * <<licensetext>>
 */

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Task4BSnackbarService } from 'src/app/tasks/5/B/task4-b-snackbar.service';
import { SaveLastUrlService } from './save-last-url.service';

@Injectable({
  providedIn: 'root'
})
export class Task5Guard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {

  constructor(private router: Router, private snackBar: Task4BSnackbarService, private lastUrlService: SaveLastUrlService) { }

  canExit(currentState: RouterStateSnapshot) : boolean {
    let num = currentState.url.replace(/[^0-9]/g, '');
    if (+num < 6 || currentState.url === "summary") {
      return true;
    } else {
      this.snackBar.openSnackBar("No task found!");
      return false;
    }
  }

  saveActivated() : boolean {
    this.lastUrlService.saveUrl();
    return true;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.saveActivated();
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canExit(nextState);
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}

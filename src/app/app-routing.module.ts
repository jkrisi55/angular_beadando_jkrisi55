import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavigatorComponent} from "src/app/navigator/navigator.component";
import {PageRoutes} from "src/app/_constants/page-routes";
import {SummaryComponent} from "src/app/summary/summary.component";
import { Task5BSnackbarService } from 'src/app/tasks/5/B/task5-b-snackbar.service';
import { Task5Guard } from './task5.guard';

const routes: Routes = [
  {
    path: PageRoutes.summary,
    component: SummaryComponent
  },
  {
    path: `${PageRoutes.task}/:index/:task`,
    component: NavigatorComponent,
    canDeactivate:[Task5Guard],
    canActivate:[Task5Guard]
  },
  {
    path: `${PageRoutes.task}/:index`,
    component: NavigatorComponent,
    canDeactivate:[Task5Guard],
    canActivate:[Task5Guard]
  },
  {
    path: PageRoutes.task,
    component: NavigatorComponent
  },
  {
    path: '',
    redirectTo: `${localStorage.getItem('prev_url') ? localStorage.getItem('prev_url') : PageRoutes.task}`,
    pathMatch: 'prefix'
  }
];
//if(localStorage.getItem('prev_url')) {localStorage.getItem('prev_url')} else {PageRoutes.task }}
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  snackBar : Task5BSnackbarService;
  
  constructor(snackBar: Task5BSnackbarService) {
    this.snackBar = snackBar;
  }
 }

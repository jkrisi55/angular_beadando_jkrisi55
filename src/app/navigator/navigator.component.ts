import { Component, OnInit } from '@angular/core';
import {tasks} from "src/app/configuration/tasks";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {RouterService} from "src/app/_services/router.service";
import {MatDialog} from "@angular/material/dialog";
import {PreviewComponent} from "src/app/preview/preview.component";
import { Task5BSnackbarService } from 'src/app/tasks/5/B/task5-b-snackbar.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.less']
})
export class NavigatorComponent implements OnInit {
  navigator_snackBar : Task5BSnackbarService;
  currentIndex: number = 1;
  selectedTask?: 'A' | 'B';
  tasks = tasks;
  constructor(private dialog: MatDialog,
              private route: ActivatedRoute,
              private routerService: RouterService,
              private router: Router,
              private snackBar: Task5BSnackbarService) {this.navigator_snackBar = snackBar;}

  ngOnInit(): void {
    this.route.params
      .subscribe((params) => {
        if (params['index']) {
          this.currentIndex = +params['index'];
          //localStorage.setItem('prev_index', params['index'].toString())
        }
        if (params['task']) {
          this.selectedTask = params['task'];
          //localStorage.setItem('prev_task', params['task'])
        }
      });


    if (this.route.snapshot.params['index']) {
      this.currentIndex = +this.route.snapshot.params['index'];
    }
    if (this.route.snapshot.params['task']) {
      this.selectedTask = this.route.snapshot.params['task'];
    }
      

  }

  nextTask() {

      this.currentIndex += 1;
      // currentIndex starts from 1 not 0
      if (this.tasks[this.currentIndex - 1] && this.tasks[this.currentIndex - 1].preview) {
        console.log('has preview');
        const dialogRef = this.dialog.open(PreviewComponent, {
          data: {
            imageUrl: this.tasks[this.currentIndex - 1].preview?.imageUrl,
            text: this.tasks[this.currentIndex - 1].preview?.text,
          },
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
      }
      if (this.currentIndex <= tasks.length) {
        this.selectedTask = undefined;
        this.routerService.routeToTaskWithoutReload(this.currentIndex, undefined);
      } else {
        //this.snackBar.openSnackBar("message")
        this.routerService.routeToSummary();
      }
  }

  selectTask(task?: 'A' | 'B') {

    this.selectedTask = task;
    this.routerService.routeToTaskWithoutReload(this.currentIndex, task);
  }

}

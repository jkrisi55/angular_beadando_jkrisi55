import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskSelectorComponent } from './task-selector/task-selector.component';
import { TaskComponent } from './task/task.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { MatGridListModule } from "@angular/material/grid-list";
import { MarkdownModule } from "ngx-markdown";
import { LayoutModule } from "@angular/cdk/layout";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { Task1AComponent } from './tasks/1/A/task1-a.component';
import { Task1BComponent } from './tasks/1/B/task1-b.component';
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { SummaryComponent } from './summary/summary.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatSidenavModule } from '@angular/material/sidenav';
import { PreviewComponent } from './preview/preview.component';
import { Task2AComponent } from "src/app/tasks/2/A/task2-a.component";
import { Task2BComponent } from "src/app/tasks/2/B/task2-b.component";
import { Task3AComponent } from "src/app/tasks/3/A/task3-a.component";
import { Task3BComponent } from "src/app/tasks/3/B/task3-b.component";
import { Task4AComponent } from "src/app/tasks/4/A/task4-a.component";
import { Task4BComponent } from "src/app/tasks/4/B/task4-b.component";
import { Task5AComponent } from "src/app/tasks/5/A/task5-a.component";
import { Task5BComponent } from "src/app/tasks/5/B/task5-b.component";
import { LoadImageComponent } from './tasks/1/A/load-image/load-image.component';
import { MatProgressBarComponent } from './mat-progress-bar/mat-progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TooltipOverviewExample } from './tooltip-overview-example/tooltip-overview-example.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Task2ATdComponent } from './task2-a-td/task2-a-td.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from './form-input/form-input.component';
import { SoftwareFormEditorComponent } from './software-form-editor/software-form-editor.component';
import { ReversePipePipe } from './reverse-pipe.pipe';
import { HighlightDirective } from './highlight.directive';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Task3BSelectorComponent } from './tasks/3/B/task3-b-selector/task3-b-selector.component';
import {MatSelectModule} from '@angular/material/select';

const materialModules = [
  LayoutModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule
]

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    NavigatorComponent,
    Task1AComponent,
    Task1BComponent,
    Task2AComponent,
    Task2BComponent,
    Task3AComponent,
    Task3BComponent,
    Task4AComponent,
    Task4BComponent,
    Task5AComponent,
    Task5BComponent,
    TaskSelectorComponent,
    SummaryComponent,
    PreviewComponent,
    LoadImageComponent,
    MatProgressBarComponent,
    TooltipOverviewExample,
    Task2ATdComponent,
    FormInputComponent,
    SoftwareFormEditorComponent,
    ReversePipePipe,
    HighlightDirective,
    Task3BSelectorComponent
  ],
  imports: [
    ...materialModules,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot(),
    RouterModule,
    FormsModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
    ScrollingModule, 
    DragDropModule,
    MatFormFieldModule, 
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: localStorage.getItem('locale') || 'en',
      loader: {
        provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    TranslateModule.forChild({
      defaultLanguage: localStorage.getItem('locale') || 'en',
      loader: {
        provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
    /*,
    TranslateModule.forRoot({
      defaultLanguage: 'en'
    })*/
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

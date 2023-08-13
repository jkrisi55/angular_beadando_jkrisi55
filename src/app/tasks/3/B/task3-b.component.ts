import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-task3-b',
  templateUrl: './task3-b.component.html',
  styleUrls: ['./task3-b.component.less']
})
export class Task3BComponent {
  selected_task3 : string = localStorage.getItem('locale') || 'en';
  template_current_language : string = "";

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'hun']);
    translate.setDefaultLang(localStorage.getItem('locale') || 'en');
    translate.use(localStorage.getItem('locale') || this.selected_task3);
    if ( this.selected_task3 === 'en') {
      this.template_current_language = "English";
    } else {
      this.template_current_language = "magyar";
    }
  }

  ngOnInit() {
  }

  selectValue( param : any ) {
    this.selected_task3 = param['selected_lang'];
    this.translate.use(this.selected_task3);
    localStorage.setItem('locale', this.selected_task3)
    if ( this.selected_task3 === 'en') {
      this.template_current_language = "English";
    } else {
      this.template_current_language = "magyar";
    }
  }

}

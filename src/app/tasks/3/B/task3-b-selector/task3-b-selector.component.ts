import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface Language {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-task3-b-selector',
  templateUrl: './task3-b-selector.component.html',
  styleUrls: ['./task3-b-selector.component.less']
})
export class Task3BSelectorComponent implements OnInit {

  selected : string = localStorage.getItem('locale') || 'en';
  select_language!: string;
  constructor(private translate: TranslateService) { 
    translate.addLangs(['en', 'hun']);
    translate.setDefaultLang(localStorage.getItem('locale') || 'en');
    translate.use(localStorage.getItem('locale') || this.selected);
  }

  ngOnInit(): void {
  }
  langs: Language[] = [
    {value: 'en', viewValue: 'english'},
    {value: 'hun', viewValue: 'hungarian'}
  ];
  @Output() onSelectValue = new EventEmitter<{selected_lang : string}>();
  onChange() {
    this.onSelectValue.emit( {selected_lang: this.selected } );
  }
}

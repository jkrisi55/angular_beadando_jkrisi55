import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-software-form-editor',
  templateUrl: './software-form-editor.component.html',
  styleUrls: ['./software-form-editor.component.less']
})
export class SoftwareFormEditorComponent implements OnInit {

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {}

  keyPattern : string = '([A-Z0-9]{4}-){2}[A-Z0-9]{4}';

dateValidator(control: AbstractControl): { [key: string]: boolean } | null {
  if (control?.value /*&& control.touched*/) {
      const today = new Date();
      const dateToCheck = new Date(control.value);
      if (dateToCheck < today) {
          return {'Invalid date': true}
      }
  }
  return null;
}

softwareForm = new FormGroup({
  softwareName: new FormControl('', Validators.required),
  activationKey: new FormControl('', [Validators.required, Validators.pattern(this.keyPattern)]),
  validUntil: new FormControl('', [Validators.required, this.dateValidator])
});
  
alert_when_valid() : void {
    alert("Név: " + this.softwareForm.controls['softwareName'].value + "\n" + "Kulcs: " + this.softwareForm.controls['activationKey'].value + 
    "\n" + "Érvényesség: " + this.datePipe.transform(this.softwareForm.controls['validUntil'].value, "YYYY.MM.dd") );
}
}

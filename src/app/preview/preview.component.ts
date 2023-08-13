import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.less']
})
export class PreviewComponent {
  constructor(public dialogRef: MatDialogRef<PreviewComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { imageUrl: string; text: string; }) {
  }

}

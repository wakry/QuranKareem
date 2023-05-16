import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-general-dialog',
  templateUrl: './general-dialog.component.html',
  styleUrls: ['./general-dialog.component.css']
})
export class GeneralDialogComponent implements OnInit {
  message = "";
  title = "";
  buttonText = "إغلاق"
  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {
    this.title = data.title
    this.message = data.message
    this.buttonText = data.buttonText
  }

  ngOnInit(): void {
  }

}

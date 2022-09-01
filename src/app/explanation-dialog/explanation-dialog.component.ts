import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-explanation-dialog',
  templateUrl: './explanation-dialog.component.html',
  styleUrls: ['./explanation-dialog.component.css']
})
export class ExplanationDialogComponent implements OnInit {

  ayat:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.ayat = data;
    console.log(this.ayat);
   }

  ngOnInit(): void {
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { ReportDialogComponent } from '../report-dialog/report-dialog.component';
import { ReportService } from '../services/report/report.service';
import { SurahReport } from '../model/surah-report';
import { NotificationsService } from '../services/notifications/notifications.service';
import { Ayah } from '../model/Ayah';
import { Surah } from '../model/surah';

@Component({
  selector: 'app-explanation-dialog',
  templateUrl: './explanation-dialog.component.html',
  styleUrls: ['./explanation-dialog.component.css']
})
export class ExplanationDialogComponent implements OnInit {

  ayah:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog , private reportService: ReportService, private ns: NotificationsService) {
    this.ayah = data;
   }

  ngOnInit(): void {
  }
  
  openReportDialog() {
    const dialogRef = this.dialog.open(ReportDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result?.send){

        var sr = <SurahReport>{}
        sr.ayah = <Ayah>{}
        sr.surah = <Surah>{};
        sr.name = "sdf";
        sr.email ="er@df.com"
        sr.content = result.reportText;
        sr.surah.id = this.ayah.surahId;
        sr.ayah.id =  this.ayah.id;
        this.reportService.postDialogReport(sr as SurahReport).subscribe(
          success => {
            this.ns.showNotificationSnackBar(success.name + " تم الإرسال شكراً لك");
          },
          error => { this.ns.showErrorSnackBar("حدث خطأ ولم يتم الإرسال" ); console.log(error) }
        );
      }
    });
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { ReportDialogComponent } from '../report-dialog/report-dialog.component';
import { ReportService } from '../../services/report/report.service';
import { NotificationsService } from '../../services/notifications/notifications.service';

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
        let content = result.reportText;
        let surahId = this.ayah.surahId;
        let ayahId =  this.ayah.id;
        this.reportService.postDialogReport(surahId, ayahId, content).subscribe(
          success => {
            this.ns.showNotificationSnackBar(" تم الإرسال شكراً لك");
          },
          error => { this.ns.showErrorSnackBar("حدث خطأ ولم يتم الإرسال" ); console.log(error) }
        );
      }
    });
  }

}

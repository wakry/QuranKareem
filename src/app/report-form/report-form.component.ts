import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Report } from '../model/report';
import { ReportService } from '../services/report/report.service';
import { NotificationsService } from '../services/notifications/notifications.service';



@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {

  reportForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.email],
    content: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private rs: ReportService, private ns: NotificationsService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.rs.postReport(this.reportForm.value as Report).subscribe(
      success => {
        this.ns.showNotificationSnackBar(success.name + " تم الإرسال شكراً لك");
        this.reportForm.reset()
      },
      error => { this.ns.showErrorSnackBar("حدث خطأ ولم يتم الإرسال"); }
    );
  }
}

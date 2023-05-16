import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Report } from '../../model/report';
import { ReportService } from '../../services/report/report.service';
import { NotificationsService } from '../../services/notifications/notifications.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {

  notSubmitting = true;
  reportForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.compose([Validators.email, Validators.required])],
    content: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private rs: ReportService, private ns: NotificationsService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.notSubmitting = false;
    this.rs.postReport(this.reportForm.value as Report).subscribe(
      success => {
        this.ns.showNotificationSnackBar(success.name + " تم الإرسال شكراً لك");
        this.router.navigate(['/']);
      },
      error => { this.ns.showErrorSnackBar("حدث خطأ ولم يتم الإرسال"); },
      () =>{this.notSubmitting = true;}
    );
  }
}

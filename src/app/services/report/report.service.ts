import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from 'src/app/model/report';
import { SurahReport } from 'src/app/model/surah-report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  suwarUrl = "https://localhost:7227/report/"
  constructor(private http: HttpClient) { }

  postReport(formData: Report): Observable<Report> {
    return this.http.post<any>(this.suwarUrl+"post-report", formData);
  }

  postDialogReport(surahReport: SurahReport): Observable<SurahReport> {
    return this.http.post<any>(this.suwarUrl+"post-surah-report", surahReport);
  }

}

import { HttpClient ,HttpParams, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from 'src/app/model/report';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  suwarUrl = +environment.apiURL+"report/"
  constructor(private http: HttpClient) { }

  postReport(formData: Report): Observable<Report> {
    return this.http.post<any>(this.suwarUrl+"post-report", formData);
  }

  postDialogReport(surahId : number, ayahId:number, content:string){
    let _headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let reportODT = JSON.stringify({ surahId: surahId, ayahId: ayahId, content: content });
    return this.http.post<any>(this.suwarUrl+"post-surah-report", reportODT,{ headers: _headers });
  }

}

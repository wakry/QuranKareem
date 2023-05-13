import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';
import {Surah} from '../../model/surah'
import { NONE_TYPE } from '@angular/compiler';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SuwarService {
  suwarUrl = environment.apiURL+"surah"

  savedBS = new BehaviorSubject<any>(localStorage.getItem("surahInfo"));

  constructor(private http: HttpClient) {}

  getSuwar(): Observable<Surah[]> {
    return this.http.get<Surah[]>(this.suwarUrl).pipe(delay(0));//.pipe(catchError(this.handleError<Surah[]>('getSuwar')));
  }


  getSurah(id: number): Observable<Surah> {
    const url = `${this.suwarUrl}/${id}`;
    return this.http.get<Surah>(url).pipe(delay(0));
  }

  getSurahWordByWord(id: number): Observable<Surah> {
    const url = `${this.suwarUrl}/${id}`;
    return this.http.get<Surah>(url).pipe(delay(0));
  }

  async sleep(milliseconds: number) {
    let resolve: any;
    let promise = new Promise((_resolve) => {
      resolve = _resolve;
    });
    setTimeout(() => resolve(), milliseconds);
    return promise;
  }


  getArabicTextWithoutDiacritics(text:string): string{
    return text.replace(/[ؐ-ًؕ-ٖٓ-ٟۖ-ٰٰۭ]/g,'');;
  }
  

  saveSurahInLocalStorage(surahInfo: any) {
    let _surahInfo = JSON.stringify(surahInfo)
    localStorage.setItem("surahInfo", _surahInfo)
    this.savedBS.next(_surahInfo);
  }

  getSurahFromLocalStorage(): string {
    return this.savedBS.getValue()
  }
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     if (error instanceof HttpErrorResponse) {
  //       console.log("Server Error!");
  //     } else {
  //       console.log("Client Side Error!");
  //     }

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     //return of(result as T);
  //     return throwError(new Error("Something wrong happened!"));
  //   };

  // }
  /** Log a HeroService message with the MessageService */
  // private log(message: string) {
  //   console.log(message);
  // }

}



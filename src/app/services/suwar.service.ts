import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import {Surah} from '../model/surah'

@Injectable()

export class SuwarService {
  suwarUrl = "http://localhost:4300/surah"
  constructor(private http: HttpClient) { }


  getSuwar(): Observable<Surah[]> {
    return this.http.get<Surah[]>(this.suwarUrl).pipe(delay(1000));//.pipe(catchError(this.handleError<Surah[]>('getSuwar')));
  }


  getSurah(id: number): Observable<Surah> {
    const url = `${this.suwarUrl}/${id}`;
    return this.http.get<Surah>(url);
  }

  getSurahWordByWord(id: number): Observable<Surah> {
    const url = `${this.suwarUrl}/${id}`;
    return this.http.get<Surah>(url);
  }

  async sleep(milliseconds: number) {
    let resolve: any;
    let promise = new Promise((_resolve) => {
      resolve = _resolve;
    });
    setTimeout(() => resolve(), milliseconds);
    return promise;
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



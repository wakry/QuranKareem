import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

export interface Surah {
  id: number;
  arabicName: string;
  englishName: string;
  numberOfPages : number;
  ayat: any;
  words: any;
  times: any;
}

@Injectable()
export class SuwarService {
  suwarUrl = "https://localhost:44301/surah"
  constructor(private http: HttpClient) { }

  getSuwar() {
    return this.http.get<Surah[]>(this.suwarUrl, { observe: 'response' })
  }

  getSurah(id: number): Observable<Surah> {
    const url = `${this.suwarUrl}/${id}`;
    return this.http.get<Surah>(url).pipe(
      tap(_ => this.log(`fetched surah id=${id}`)),
      catchError(this.handleError<Surah>(`getSurah id=${id}`)));
  }

  getSurahWordByWord(id: number): Observable<Surah> {
    const url = `${this.suwarUrl}/${id}`;
    return this.http.get<Surah>(url).pipe(
      tap(_ => this.log(`fetched surah id=${id}`)),
      catchError(this.handleError<Surah>(`getSurah id=${id}`)));
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };

  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }

}



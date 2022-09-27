import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { SuwarService } from '../services/suwar.service';
import { Surah } from '../model/surah'
import { tap, finalize, map, startWith } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-suwar',
  templateUrl: './suwar.component.html',
  providers: [SuwarService],
  styleUrls: ['./suwar.component.css']
})
export class SuwarComponent implements OnInit, OnDestroy {

  suwar: Surah[] | undefined;
  suwarFiltered$: Surah[] | undefined
  error: any | undefined = '';
  isLoading = true;
  isError = false;
  asyncResult: any;

  constructor(public suwarService: SuwarService) { }

  ngOnInit(): void {
    this.showSuwar();
  }
 
 
  search(searchkey: string) {
    this.suwarFiltered$ = this.filter(searchkey);
  }

  private filter(value: string): Surah[] | undefined {
    if(value === '') return this.suwar;
    return this.suwar?.filter(s =>
      s.arabicName.includes(value)||
      this.getArabicTextWithoutDiacritics(s.arabicName).includes(value)||
      this.getArabicTextNormalized(s.arabicName).includes(value)||
      s.id.toString() === value||
      s.englishName.includes(value)||
      this.getEnglishTextNormalized(s.englishName.toLowerCase()).includes((value as string).toLowerCase()));
  }

   // TODO : MAKE ALL THIS IN THE API SIDE
  getArabicTextWithoutDiacritics(text:string): string{
    text = text.replace(/[ؐ-ًؕ-ٖٓ-ٟۖ-ٰٰۭ]/g,'');
    return text;
  }

  // remove أ إ etc
  getArabicTextNormalized(text: string): string {
    //normalize Arabic
    text = text.replace(/[ؐ-ًؕ-ٖٓ-ٟۖ-ٰٰۭ]/g,'');
    text = text.replace(/(آ|إ|أ)/g, 'ا');
    text = text.replace(/(ة)/g, 'ه');
    text = text.replace(/(ئ|ؤ)/g, 'ء')
    text = text.replace(/(ى)/g, 'ي');
    return text;
  }

  // Work on this it has issues with greek and latin characters!
  getEnglishTextNormalized(text: string): string {
    text= text.replace(/[^A-Za-z']/g, "");
    console.log("after replace is : ", text);
    return text;
  }



  showSuwar() {
    this.suwarService.getSuwar().pipe(
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe(
      success => { this.suwar = success},
      error => { this.isError = true; throw error; });
  }

  ngOnDestroy(): void {
    console.log("SuwarComponent destroyed.");
  }

}

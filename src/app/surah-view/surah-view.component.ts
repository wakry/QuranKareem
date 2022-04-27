import {Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Surah, SuwarService } from '../services/suwar.service';

@Component({
  selector: 'app-surah-view',
  templateUrl: './surah-view.component.html',
  styleUrls: ['./surah-view.component.css']
})
export class SurahViewComponent implements OnInit  {

  constructor(private route: ActivatedRoute, private suwarService: SuwarService) { }
  @ViewChild('audioElement') audio: any;
  id: any;
  @Input() surah: Surah | undefined;
  count = 0;
  previousPointer = -1;
  nextPointer = 0;
  counter = 0;
  currentPageNumber = 1;
  currentPageAyat:any = []
  currentView: number = 1;

  ngOnInit(): void {
    this.currentView = 1;
  }


  // private getSurah(id: number) {
  //   id = parseInt(this.id);
  //   this.suwarService.getSurahWordByWord(id).subscribe(surah => this.surah = surah);
  // }
  public test(){
    console.log(this.surah)
  }

  public changeView(value: any){

    this.currentView = value; 

    // Set the current page number to the first page in the Surah.
    if(this.currentView == 3){
      this.currentPageNumber = this.surah?.ayat[0].pageNumber;
      this.populatePageAyat()
    }

  }

  public play(i:number){
    this.audio.playAt(this.surah?.times[i]);
  }

  public getSurahText(){
    console.log(this.surah?.arabicName);
  }

  public trackword(index: number, word:string){

  }

  public goNext(){
    if(this.surah?.ayat.length - 1> this.nextPointer){
    
      this.previousPointer = this.nextPointer;
      this.nextPointer = this.nextPointer + 1;

    }else{

      console.log("no more ayat!");

    }

  } 

  public goPrevious(){

    console.log(this.previousPointer > -1);

    if(this.previousPointer > -1){

      this.nextPointer = this.previousPointer;
      this.previousPointer = this.previousPointer -1;

    }else{

      console.log("At the start!");

    }

  }

  public goNextPage(){
    console.log("newPage");
    this.currentPageNumber++;
    console.log("Page number : " + this.currentPageNumber);
    console.log(this.surah?.ayat)
    this.currentPageAyat = this.surah?.ayat.filter((ayah:any) => ayah.pageNumber === this.currentPageNumber);

    console.log(this.currentPageAyat);
  }

  public goPreviousPage(){
    console.log("previousPage!");
    this.currentPageNumber--;
    this.populatePageAyat(); 
  }

 private populatePageAyat(){
      this.currentPageAyat = this.surah?.ayat.filter((ayah:any) => ayah.pageNumber === this.currentPageNumber);
      console.log(this.currentPageAyat);
 }


}



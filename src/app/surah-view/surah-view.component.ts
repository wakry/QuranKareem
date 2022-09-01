import { NumberSymbol } from '@angular/common';
import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ExplanationDialogComponent } from '../explanation-dialog/explanation-dialog.component';
import { Surah, SuwarService } from '../services/suwar.service';

@Component({
  selector: 'app-surah-view',
  templateUrl: './surah-view.component.html',
  styleUrls: ['./surah-view.component.css']
})
export class SurahViewComponent implements OnInit {

  // // Scroll event
  // @HostListener('window:scroll', ['$event']) onScroll(event: any) {
  //   console.log("event!");
  //   this.pageYoffset = window.pageYOffset;
  // }

  constructor(private route: ActivatedRoute,
    private suwarService: SuwarService,
    private elRef: ElementRef,
    public dialog: MatDialog) { }
    
  @ViewChild('audioElement') audio: any;
  id: any;
  @Input() surah: Surah | undefined;
  count = 0;
  previousPointer = -1;
  nextPointer = 0;
  counter = 0;
  firstPageNumber = 1;
  currentPageNumber = 1;
  lastPageNumber = 1;
  currentPageAyat: any = []
  currentView: number = 1;
  //pageYoffset: number = 0;

  ngOnInit(): void {

    this.currentView = 1;

  }


  // private getSurah(id: number) {
  //   id = parseInt(this.id);
  //   this.suwarService.getSurahWordByWord(id).subscribe(surah => this.surah = surah);
  // }

  public changeView(value: any) {

    this.currentView = value;

    // Set the current page number to the first page in the Surah.
    if (this.currentView == 3) {
      this.currentPageNumber = this.surah?.ayat[0].pageNumber;
      this.firstPageNumber = this.currentPageNumber;
      if (this.surah?.numberOfPages)
        this.lastPageNumber = this.firstPageNumber + this.surah?.numberOfPages - 1;
      this.populatePageAyat();

    }

  }

  public play(i: number) {

    this.audio.playAt(this.surah?.times[i]);
    
  }

  public openTfsser(j:number){

    this.openDialog(j);
    
  }

  public getSurahText() {

    console.log(this.surah?.arabicName);

  }

  public trackword(index: number, word: string) {

  }

  public goNext() {
    if (this.surah?.ayat.length - 1 > this.nextPointer) {

      this.previousPointer = this.nextPointer;
      this.nextPointer = this.nextPointer + 1;

    } else {

      console.log("no more ayat!");

    }

  }

  public goPrevious() {
    if (this.previousPointer > -1) {

      this.nextPointer = this.previousPointer;
      this.previousPointer = this.previousPointer - 1;

    } else {

      console.log("At the start!");

    }

  }

  public goNextPage() {

    if (this.currentPageNumber < this.lastPageNumber) {

      this.currentPageNumber++;
      this.currentPageAyat = this.surah?.ayat.filter((ayah: any) => ayah.pageNumber === this.currentPageNumber);
      this.scrollToTop();

    } else {

      console.log("At last page");

    }

  }

  public goPreviousPage() {

    if (this.currentPageNumber > this.firstPageNumber) {

      this.currentPageNumber--;
      this.populatePageAyat();

    } else {

      console.log("At first page");

    }

  }

  private populatePageAyat() {

    this.currentPageAyat = this.surah?.ayat.filter((ayah: any) => ayah.pageNumber === this.currentPageNumber);
    console.log(this.currentPageAyat);

  }

  scrollToTop() {
    this.elRef.nativeElement.scrollIntoView();
  }

  
  openDialog(id:number) {
    console.log(this.surah?.ayat[id]);
    const dialogRef = this.dialog.open(ExplanationDialogComponent,{data:this.surah?.ayat[id]});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}



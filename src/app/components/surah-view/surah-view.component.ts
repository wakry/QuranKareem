import { NumberSymbol } from '@angular/common';
import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ExplanationDialogComponent } from '../explanation-dialog/explanation-dialog.component';
import { SuwarService } from '../../services/suwar/suwar.service';
import {Surah} from '../../model/surah';
import { ScreenService } from '../../services/screen.service';
import { NotificationsService } from '../../services/notifications/notifications.service';

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

  constructor(
    private suwarService: SuwarService,
    private elRef: ElementRef,
    public dialog: MatDialog,
    private screenService: ScreenService,
    private router: Router,
    private notification: NotificationsService
  ) { }
    
  @ViewChild('audioElement') audio: any;
  @Input() surah: Surah | undefined;
  @Input() isSaved: boolean = false
  previousPointer = -1;
  nextPointer = 0;
  firstPageNumber = 1;
  currentPageNumber = 0;
  currentPageStartingIndex = 0
  lastPageNumber = 1;
  currentPageAyat: any = []
  currentView: number = 1;
  isSmallScreen:boolean = false;

  //pageYoffset: number = 0;

  ngOnInit(): void {
    try {
      if (this.isSaved) {
        let savedJson = JSON.parse(this.suwarService.getSurahFromLocalStorage())
        this.previousPointer = savedJson["previousPointer"];
        this.nextPointer = savedJson["nextPointer"];
        this.firstPageNumber = savedJson["firstPageNumber"];
        this.currentPageNumber = savedJson["currentPageNumber"];
        this.currentPageStartingIndex = savedJson["currentPageStartingIndex"];
        this.lastPageNumber = savedJson["lastPageNumber"];
        this.currentView = savedJson["currentView"];
        this.changeView(this.currentView)
      } else {
        this.currentView = 1;
      }
    } catch (e:any) {
      this.router.navigate(['/'])
      this.notification.showErrorSnackBar(e.message)
    }
  }

  public changeView(value: any) {

    this.currentView = value;

    // Set the current page number to the first page in the Surah.
    if (this.currentView == 3) {
      if(this.currentPageNumber == 0) this.currentPageNumber = this.surah?.ayat[0].pageNumber;
      //this.currentPageNumber = this.surah?.ayat[0].pageNumber;
      this.firstPageNumber = this.surah?.ayat[0].pageNumber;
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
      this.currentPageStartingIndex += this.currentPageAyat.length;
      this.populatePageAyat()
      //this.scrollToTop();
    } else {
      console.log("At last page");
    }
  }

  public goPreviousPage() {

    if (this.currentPageNumber > this.firstPageNumber) {
      this.currentPageNumber--;
      this.populatePageAyat();
      this.currentPageStartingIndex-=this.currentPageAyat.length;
    } else {

      console.log("At first page");

    }

  }

  private populatePageAyat() {
    this.currentPageAyat = this.surah?.ayat.filter((ayah: any) => ayah.pageNumber === this.currentPageNumber);
  }

  scrollToTop() {
    this.elRef.nativeElement.scrollIntoView();
  }

  save(){
    try {
      let value = {
        "surahId": this.surah?.id,
        "previousPointer": this.previousPointer,
        "nextPointer": this.nextPointer,
        "firstPageNumber": this.firstPageNumber,
        "currentPageNumber": this.currentPageNumber,
        "currentPageStartingIndex": this.currentPageStartingIndex,
        "lastPageNumber": this.lastPageNumber,
        "currentView": this.currentView
      }

      this.suwarService.saveSurahInLocalStorage(value)
      this.notification.showNotificationSnackBar("تم الحفظ بنجاح");

    } catch (e) {
      this.notification.showErrorSnackBar("لم يتم الحفظ حدث خطأ")
    }
  }
  
  openDialog(id:number) {
    const dialogRef = this.dialog.open(ExplanationDialogComponent,{data:this.surah?.ayat[id]});

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}



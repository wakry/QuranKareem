import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DateService } from '../../services/date/date.service'; 
import { ScreenService } from '../../services/screen.service';
import { SuwarService } from '../../services/suwar/suwar.service';
import {Clipboard} from '@angular/cdk/clipboard';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router, private dateService: DateService, public screenService: ScreenService, private suwarService: SuwarService, private clipboard: Clipboard, private ns: NotificationsService) { }
  date:any;
  showMenu:any ;
  showContinueButton:boolean = false;
  savedObj:any;
  ngOnInit(): void {
    this.date = this.dateService.getDate()|| 'Error';
    this.screenService.isSmall.subscribe(
      result => this.showMenu = result
    )
    this.suwarService.savedBS.subscribe(v =>this.showContinueButton = v != null)
    this.showContinueButton = this.suwarService.getSurahFromLocalStorage() != null
  }

  public btnClick(){
    this.router.navigateByUrl('/suwar');
  }

  goToSaved(event:any){
    event.preventDefault();

    this.router.navigateByUrl('/', {skipLocationChange: true})
      .then(() => this.router.navigate(['/suwar',"saved"]));
  }

  bookmark() {
    window.close();
  }

  share() {
    try {
      this.clipboard.copy(window.location.href);
      this.ns.showNotificationSnackBar("تم النسخ الرابط للمشاركة")
    } catch (e) {
      this.ns.showErrorSnackBar("لم يتم نسخ الرابط")
    }
    this.clipboard.copy(window.location.href);

  }

  toggleTheme() {

    let mainbody = document.getElementById("main-body")

    if (mainbody?.classList.contains("my-dark-theme")) {
      mainbody.classList.remove("my-dark-theme")
      mainbody.classList.add("my-light-theme")
    } else {
      mainbody?.classList.remove("my-light-theme")
      mainbody?.classList.add("my-dark-theme")
    }

  }

}

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DateService } from '../../services/date/date.service'; 
import { ScreenService } from '../../services/screen.service';
import { SuwarService } from '../../services/suwar/suwar.service';
import {Clipboard} from '@angular/cdk/clipboard';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router, private dateService: DateService, public screenService: ScreenService, private suwarService: SuwarService,private clipboard: Clipboard){ }
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
    this.clipboard.copy(window.location.href);
  }

}

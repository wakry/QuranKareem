import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DateService } from '../services/date/date.service'; 
import { ScreenService } from '../services/screen.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router, private dateService: DateService, public screenService: ScreenService) { }
  date:any;
  showMenu:any ;
  ngOnInit(): void {
    this.date = this.dateService.getDate()|| 'Error';
    this.screenService.isSmall.subscribe(
      result => this.showMenu = result
    )
  }

  public btnClick(){
    this.router.navigateByUrl('/suwar');
  }

 bookmark() {
  window.close();
  }

}

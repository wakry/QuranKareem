import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../../services/screen/screen.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  cssClassName = ""
  constructor(public screenService: ScreenService) { }

  ngOnInit(): void {
    this.screenService.currentTheme.subscribe(value => { this.cssClassName = value })
  }

}

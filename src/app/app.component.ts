import { Component } from '@angular/core';
import { ErrorsService } from './services/errors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showErrorsBlock = false;
  constructor(public errorsService:ErrorsService){}

  ngOnInit() {
  }

  title = 'QuranKareem';
  }



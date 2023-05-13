import { Component, NgZone } from '@angular/core';

import { appError } from './model/appError';
import { NotificationsService } from './services/notifications/notifications.service';
import { environment } from 'src/environments/environment';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appError: appError | undefined;

  constructor(private ns: NotificationsService, private ngZone: NgZone, private titleService: Title) { }

  ngOnInit() {
    console.log("app called");
    this.ns.cast.subscribe(
      result => {
        this.ngZone.run(() => {
          this.appError = result;
          console.log(this.appError);
        });
      });
    this.titleService.setTitle(environment.title);
  }
}



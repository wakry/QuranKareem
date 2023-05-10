import { Component, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { appError } from './model/appError';
import { NotificationsService } from './services/notifications/notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appError : appError | undefined;

  constructor(private ns: NotificationsService, private ngZone: NgZone) {}

  ngOnInit() {
    console.log("app called");
    this.ns.cast.subscribe(
      result => {
        this.ngZone.run(() => {
          this.appError = result;
          console.log(this.appError);
        });
      });
  }

  title = 'QuranKareem';
}



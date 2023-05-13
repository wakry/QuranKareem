import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { appError } from '../../model/appError';
import { NotificationsService } from '../../services/notifications/notifications.service';

@Component({
  selector: 'app-errors-block',
  templateUrl: './errors-block.component.html',
  styleUrls: ['./errors-block.component.scss'],
})
export class ErrorsBlockComponent implements OnInit {

  @Input() appError : appError | undefined;

  constructor() { }

  ngOnInit(): void { }

}

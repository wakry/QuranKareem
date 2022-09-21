import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ErrorsService } from '../services/errors.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private errorService: ErrorsService) { }
  handleError(error: any) {
    
    // Notify subscrivers
    this.errorService.notifyError();

    // switch (error.constructor) {
    //   case HttpErrorResponse:
    //     console.error("An Error happened on the server");
    //     break;
    //   default:
    //     console.error("An Error happened on the application");
    }
  }

import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { appError } from "../model/appError";
import { ErrorsService } from '../services/errors.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  appError : appError={code:'unknown', message:'! unkown Error'.toUpperCase()};
  constructor(private errorService: ErrorsService) { }
  handleError(error: any) {

    switch (error.constructor) {
      case HttpErrorResponse:
        console.error("An Error happened on the server " + error.message);
        break;
      default:
        console.error("An Error happened on the application " + error.message);
    }

    // TODO: better message and better logging.
    this.appError.code = error.code;
    this.appError.message = error.message;
    this.errorService.notifyError(this.appError);
    this.errorService.showErrorSnackBar();

  }
}

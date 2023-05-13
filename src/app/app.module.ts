import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuwarComponent } from './components/suwar/suwar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SurahViewComponent } from './components/surah-view/surah-view.component';
import { ExplanationDialogComponent } from './components/explanation-dialog/explanation-dialog.component';
import { GlobalErrorHandler } from './handlers/GlobalErrorHandler';
import { NavBarButtonComponent } from './components/nav-bar-button/nav-bar-button.component';
import { ErrorsBlockComponent } from './components/errors-block/errors-block.component';
import { SurahListElementComponent } from './components/surah-list-element/surah-list-element.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ReportFormComponent } from './components/report-form/report-form.component';
import { MatMenuModule } from '@angular/material/menu';
import { SurahContainerComponent } from './components/surah-container/surah-container.component';
import { ReportDialogComponent } from './components/report-dialog/report-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    SuwarComponent,
    NavBarComponent,
    SurahContainerComponent,
    AudioPlayerComponent,
    SurahViewComponent,
    ExplanationDialogComponent,
    NavBarButtonComponent,
    ErrorsBlockComponent,
    SurahListElementComponent,
    SearchBarComponent,
    SpinnerComponent,
    ReportFormComponent,
    SurahContainerComponent,
    ReportDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }

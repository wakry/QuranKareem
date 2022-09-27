import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatCardModule } from '@angular/material/card'
import { MatDialogModule } from '@angular/material/dialog'
import { MatTabsModule } from '@angular/material/tabs'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";
import {MatSnackBarModule} from "@angular/material/snack-bar"
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';

const quran_logo_url = "./assets/quran.svg"
const allah_logo_url = "./assets/allah.svg"

const MaterialComponents = [
  MatIconModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatDialogModule,
  MatTabsModule,
  MatIconModule,
  MatToolbarModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatAutocompleteModule,
  MatFormFieldModule
]
@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {

  // Register custom icons to the mat-icon
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {

    this.matIconRegistry.addSvgIcon(
      "quran-icon",
      this.domSanitizer.bypassSecurityTrustResourceUrl(quran_logo_url));

    this.matIconRegistry.addSvgIcon(
      "allah-icon",
      this.domSanitizer.bypassSecurityTrustResourceUrl(allah_logo_url));

  }
}

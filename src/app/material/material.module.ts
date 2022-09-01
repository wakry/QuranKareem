import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatButtonToggleModule} from '@angular/material/button-toggle' 
import {MatCardModule} from '@angular/material/card' 
import {MatDialogModule,MAT_DIALOG_DATA} from '@angular/material/dialog' 
import {MatTabsModule} from '@angular/material/tabs'

const MaterialComponents=[
  MatIconModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatDialogModule,
  MatTabsModule,
  MatIconModule
]
@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }

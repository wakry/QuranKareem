import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatButtonToggleModule} from '@angular/material/button-toggle' 
import {MatCardModule} from '@angular/material/card' 

const MaterialComponents=[
  MatIconModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule
]
@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }

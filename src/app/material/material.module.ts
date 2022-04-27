import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatButtonToggleModule} from '@angular/material/button-toggle' 

const MaterialComponents=[
  MatIconModule,
  MatButtonModule,
  MatButtonToggleModule
]
@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }

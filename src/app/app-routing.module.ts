import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurahComponent } from './surah/surah.component';
import { SuwarComponent } from './suwar/suwar.component';

const routes: Routes = [
  {path:'suwar', component: SuwarComponent},
  {path:'suwar/:id', component: SurahComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

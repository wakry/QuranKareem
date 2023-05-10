import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportFormComponent } from './report-form/report-form.component';
import { SurahContainerComponent } from './surah-container/surah-container.component';
import { SuwarComponent } from './suwar/suwar.component';

const routes: Routes = [
  {path:'suwar', component: SuwarComponent},
  {path:'suwar/:id', component: SurahContainerComponent},
  {path:'report',component:ReportFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

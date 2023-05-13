import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportFormComponent } from './components/report-form/report-form.component';
import { SurahContainerComponent } from './components/surah-container/surah-container.component';
import { SuwarComponent } from './components/suwar/suwar.component';

const routes: Routes = [
  {path:'', component: SuwarComponent},
  {path:'suwar/:id', component: SurahContainerComponent},
  {path:'report',component:ReportFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportFormComponent } from './components/report-form/report-form.component';
import { SurahContainerComponent } from './components/surah-container/surah-container.component';
import { SuwarComponent } from './components/suwar/suwar.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'suwar', component: SuwarComponent},
  {path:'suwar/:id', component: SurahContainerComponent},
  {path:'report',component:ReportFormComponent},
  {path:'**',component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

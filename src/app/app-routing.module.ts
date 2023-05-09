import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { StartComponent } from './start/start.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: 'Start', component:StartComponent },
  { path: 'Results', component:ResultsComponent },
  { path: 'Quiz', component:QuestionsComponent },
  { path: '', pathMatch:'full' , redirectTo:'Start' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

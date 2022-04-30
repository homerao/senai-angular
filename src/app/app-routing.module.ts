import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent} from '../app/pages/index/index.component';
import { VagasComponent} from '../app/pages/vagas/vagas.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent 
  },{
    path: 'vagas',
    component: VagasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

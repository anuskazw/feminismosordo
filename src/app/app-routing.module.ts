import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/page/principal/principal.component';
import { TestComponent } from './components/page/test/test.component';
import { HistoriaComponent } from './components/page/historia/historia.component';
import { ConceptosComponent } from './components/page/conceptos/conceptos.component';
import { ViolenciaComponent } from './components/page/violencia/violencia.component';
import { RecursosComponent } from './components/page/recursos/recursos.component';
import { EncuentrosComponent } from './components/page/encuentros/encuentros.component';
import { ProyectosComponent } from './components/page/proyectos/proyectos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    component: PrincipalComponent
  },
  {
    path: 'historia',
    component: HistoriaComponent
  },
  {
    path: 'conceptos',
    component: ConceptosComponent
  },
  {
    path: 'violencia',
    component: ViolenciaComponent
  },
  {
    path: 'recursos-y-materiales',
    component: RecursosComponent
  },
  {
    path: 'encuentros-feministas',
    component: EncuentrosComponent
  },
  {
    path: 'proyectos',
    component: ProyectosComponent
  },
  {
    path: 'components',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

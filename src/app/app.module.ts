import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/atomic/card/card.component';
import { LogoComponent } from './components/atomic/logo/logo.component';
import { TestComponentsComponent } from './components/molecule/test-components/test-components.component';
import { PrincipalComponent } from './components/page/principal/principal.component';
import { TestComponent } from './components/page/test/test.component';
import { NavComponent } from './components/atomic/nav/nav.component';
import { ReelsComponent } from './components/molecule/reels/reels.component';
import { HistoriaComponent } from './components/page/historia/historia.component';
import { ConceptosComponent } from './components/page/conceptos/conceptos.component';
import { ViolenciaComponent } from './components/page/violencia/violencia.component';
import { RecursosComponent } from './components/page/recursos/recursos.component';
import { EncuentrosComponent } from './components/page/encuentros/encuentros.component';
import { ProyectosComponent } from './components/page/proyectos/proyectos.component';
import { Test2Component } from './components/page/test2/test2.component';
import { TeamComponent } from './components/page/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    LogoComponent,
    TestComponentsComponent,
    PrincipalComponent,
    TestComponent,
    NavComponent,
    ReelsComponent,
    HistoriaComponent,
    ConceptosComponent,
    ViolenciaComponent,
    RecursosComponent,
    EncuentrosComponent,
    ProyectosComponent,
    Test2Component,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

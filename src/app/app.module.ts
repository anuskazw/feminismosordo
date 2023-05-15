import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/atomic/card/card.component';
import { LogoComponent } from './components/atomic/logo/logo.component';
import { TestComponentsComponent } from './components/molecule/test-components/test-components.component';
import { PrincipalComponent } from './page/principal/principal.component';
import { TestComponent } from './page/test/test.component';
import { NavComponent } from './components/atomic/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    LogoComponent,
    TestComponentsComponent,
    PrincipalComponent,
    TestComponent,
    NavComponent
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

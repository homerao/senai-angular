import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VagaCardComponent } from './components/vaga-card/vaga-card.component';
import { VagaTableComponent } from './components/vaga-table/vaga-table.component';
import { IndexComponent } from './pages/index/index.component';
import { VagasComponent } from './pages/vagas/vagas.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    VagaCardComponent,
    VagaTableComponent,
    IndexComponent,
    VagasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

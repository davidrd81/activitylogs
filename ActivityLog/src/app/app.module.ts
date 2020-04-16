import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {APP_BASE_HREF} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// RUTAS
import { AppRoutingModule } from './app-routing.module';

// componentes
import { AppComponent } from './app.component';
import { BinnacleComponent } from './components/binnacle/binnacle.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';

// servicios
import { OperatorService } from './services/operator.service';
import { BinnacleService } from './services/Binnacle.service';

@NgModule({
  declarations: [
    AppComponent,
    BinnacleComponent,
    OperatorsComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }, OperatorService, BinnacleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

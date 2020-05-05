import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {APP_BASE_HREF} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Angular Material
import { MaterialModule } from './material.module'

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormbinnacleComponent } from './components/formbinnacle/formbinnacle.component';
import { FormoperatorComponent } from './components/formoperator/formoperator.component';

@NgModule({
  declarations: [
    AppComponent,
    BinnacleComponent,
    OperatorsComponent,
    HomeComponent,
    HeaderComponent,
    FormbinnacleComponent,
    FormoperatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }, OperatorService, BinnacleService],
  bootstrap: [AppComponent],
  entryComponents: [FormbinnacleComponent, FormoperatorComponent]
})
export class AppModule { }

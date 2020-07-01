import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

// Angular Material
import { MaterialModule } from './material.module';

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
import { ScheduleService } from './services/schedule.service';
import { AreaService } from './services/area.service';

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
    ReactiveFormsModule,
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue : '/' },
    OperatorService, BinnacleService, ScheduleService, AreaService,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'auto', appearance: 'outline'} },
    ],
  bootstrap: [AppComponent],
  entryComponents: [FormbinnacleComponent, FormoperatorComponent]
})
export class AppModule { }

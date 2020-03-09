import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSelectModule} from '@angular/material/select';

import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UppercontainerComponent } from './uppercontainer/uppercontainer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SelectoptionComponent } from './selectoption/selectoption.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule }    from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardServiceService } from './authguard-service.service';
import { SignupComponent } from './signup/signup.component';
import { DragndropComponent } from './dragndrop/dragndrop.component';
import {DragDropModule} from '@angular/cdk/drag-drop';






PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UppercontainerComponent,
    SelectoptionComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent,
    DragndropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
     PlotlyModule,
     NgbModule,
     MatSelectModule,
     BrowserAnimationsModule,
     HttpClientModule,
     ReactiveFormsModule,
     FormsModule,
     DragDropModule


  ],
  providers: [AuthguardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

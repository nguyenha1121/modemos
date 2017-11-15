import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TextEmotionsComponent } from './text-emotions/text-emotions.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatListModule,
  MatToolbarModule, MatIconModule, MatProgressBarModule } from '@angular/material';
import { ChartModule } from 'angular2-highcharts';
import * as highchart from 'highcharts';
import * as highchartsHeatmap from 'highcharts/modules/heatmap';

import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

import { HateComponent } from './hate/hate.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmbeddingsComponent } from './embeddings/embeddings.component';
import { NeighborsComponent } from './neighbors/neighbors.component';
import { EmotionsComponent } from './emotions/emotions.component';


// import HighchartsMore from 'highcharts/highcharts-more';

export declare let require: any;

export function highchartsFactory() {
  const hc = require('highcharts');
  const hcm = require('highcharts/highcharts-more'); // used for more category of charts
  const exporting: any = require('highcharts/modules/exporting');
  hcm(hc);
  highchartsHeatmap(hc);
  exporting(hc);
  return hc;
}

@NgModule({
  declarations: [
    AppComponent,
    TextEmotionsComponent,
    HateComponent,
    DashboardComponent,
    EmbeddingsComponent,
    NeighborsComponent,
    EmotionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatGridListModule, MatListModule,
    MatButtonModule, MatToolbarModule, MatIconModule, MatProgressBarModule,
    ChartModule,
    AppRoutingModule,
    HttpClientModule,
  ],

  providers: [
    { provide: HighchartsStatic, useFactory: highchartsFactory }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

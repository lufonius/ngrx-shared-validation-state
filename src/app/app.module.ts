import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './store';
import { CounterEffects } from './store/counter';

import { AppComponent } from './app.component';
import { SimpleCounterComponent } from './containers/simple-counter/simple-counter.component';
import { LogMonitorComponent } from './containers/log-monitor/log-monitor.component';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateImmutability: true,
        strictStateSerializability: true
      }
    }),
    EffectsModule.forRoot([CounterEffects])
  ],
  declarations: [
    AppComponent,
    SimpleCounterComponent,
    LogMonitorComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

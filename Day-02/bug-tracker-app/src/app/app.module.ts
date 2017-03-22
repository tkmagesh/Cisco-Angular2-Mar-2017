import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UtilsModule } from '../utils/utils.module';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bugTracker.component';
import { ClosedCountPipe } from './pipes/closedCount.pipe';
import { BugStatsComponent } from './bug-tracker/bug-stats/bugStats.component';


import { BugStorageService } from './services/bugStorage.service';
import { BugOperationsService } from './services/bugOperations.service';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    ClosedCountPipe,
    BugStatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UtilsModule
  ],
  providers: [
    BugStorageService,
    BugOperationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

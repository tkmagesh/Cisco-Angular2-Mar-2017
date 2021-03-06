import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UtilsModule } from '../utils/utils.module';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bugTracker.component';
import { ClosedCountPipe } from './pipes/closedCount.pipe';
import { BugStatsComponent } from './bug-tracker/bug-stats/bugStats.component';
import { BugEditComponent } from './bug-tracker/bug-edit/bugEdit.component';
import { BugSortComponent } from './bug-tracker/bug-sort/bugSort.component';
import { BugListComponent } from './bug-tracker/bug-list/bugList.component';


import { BugStorageService } from './services/bugStorage.service';
import { BugOperationsService } from './services/bugOperations.service';
import { BugServerService } from './services/bugServer.service';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    ClosedCountPipe,
    BugStatsComponent,
    BugEditComponent,
    BugSortComponent,
    BugListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UtilsModule
  ],
  providers: [
    BugStorageService,
    BugOperationsService,
    BugServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

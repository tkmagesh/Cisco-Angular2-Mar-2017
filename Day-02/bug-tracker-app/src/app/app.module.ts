import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bugTracker.component';
import { TrimTextPipe } from './pipes/trimText.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { ClosedCountPipe } from './pipes/closedCount.pipe';
import { ElapsedPipe } from './pipes/elapsed.pipe';

import { BugStorageService } from './services/bugStorage.service';
import { BugOperationsService } from './services/bugOperations.service';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    TrimTextPipe,
    SortPipe,
    ClosedCountPipe,
    ElapsedPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    BugStorageService,
    BugOperationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

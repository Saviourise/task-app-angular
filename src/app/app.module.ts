import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxSemanticModule } from 'ngx-semantic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { BoardComponent } from './components/board/board.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DocumentComponent } from './components/document/document.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarComponent,
    DocumentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BoardComponent,
    NgxSemanticModule,
    BrowserAnimationsModule,
    SidenavModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

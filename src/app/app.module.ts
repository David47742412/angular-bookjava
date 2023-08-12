import { NgModule, TransferState } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './components/card/card.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { NewBookComponent } from './components/new-book/new-book.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AppComponent, HomeComponent, NewBookComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CardComponent,
    MatRadioModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  providers: [provideClientHydration(), TransferState, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}

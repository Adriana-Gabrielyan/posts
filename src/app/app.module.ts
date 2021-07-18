import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ModalComponent } from './components/modal/modal.component';
@NgModule({
  declarations: [AppComponent, CardComponent, ModalComponent],
  imports: [BrowserModule],
  entryComponents: [CardComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

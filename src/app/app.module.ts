import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PinVerificationModule } from './pin-verification/pin-verification.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PinVerificationModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VocabImageSelectorComponent } from './vocab-image-selector/vocab-image-selector.component';
import { AddVocabImageComponent } from './add-vocab-image/add-vocab-image.component';
import {HttpClientModule} from '@angular/common/http';
import { SafeURLPipe } from './pipes/safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VocabImageSelectorComponent,
    AddVocabImageComponent,
    SafeURLPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

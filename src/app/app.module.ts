import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HumanComponent } from './human/human.component';
import { SaiyanComponent } from './saiyan/saiyan.component';
import { SaiyantwoComponent } from './saiyantwo/saiyantwo.component';
import { SaiyanthreeComponent } from './saiyanthree/saiyanthree.component';
import { SaiyanfourComponent } from './saiyanfour/saiyanfour.component';
import { SupersaiyanComponent } from './supersaiyan/supersaiyan.component';

@NgModule({
  declarations: [
    AppComponent,
    HumanComponent,
    SaiyanComponent,
    SaiyantwoComponent,
    SaiyanthreeComponent,
    SaiyanfourComponent,
    SupersaiyanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

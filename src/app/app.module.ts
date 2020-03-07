import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DiscListComponent } from './disc-list/disc-list.component';
import { DiscDetailsComponent } from './disc-details/disc-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot([
      { path: '', component: DiscListComponent },
      { path: 'discs/:discId', component: DiscDetailsComponent},
    ])],
  declarations: [ AppComponent,  TopBarComponent, DiscListComponent, DiscDetailsComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

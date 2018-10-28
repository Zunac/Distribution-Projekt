import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { RatingManagerComponent } from './rating-manager/rating-manager.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    RatingManagerComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
        {
          path: 'company',
          component: CompanyListComponent
        },
        {
          path: 'rating',
          component: RatingManagerComponent
        },
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { RatingManagerComponent } from './rating-manager/rating-manager.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    RatingManagerComponent,
    NavigationBarComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { RatingManagerComponent } from './rating-manager/rating-manager.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { FooterComponent } from './footer/footer.component';
import {AngularFireModule} from 'angularfire2';
<<<<<<< HEAD
import {AngularFireAuth} from 'angularfire2/auth'
=======
>>>>>>> Developer
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AddUserComponent } from './add-user/add-user.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
=======
>>>>>>> Developer

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    RatingManagerComponent,
    NavigationBarComponent,
    SearchBarComponent,
    FrontPageComponent,
    FooterComponent,
    AddUserComponent,
<<<<<<< HEAD
    LoginComponent
=======
>>>>>>> Developer
  ],

  imports: [
    BrowserModule,
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
      {
        path: '',
        component: FrontPageComponent
      },
      {
<<<<<<< HEAD
        path: 'login',
        component: LoginComponent
=======
>>>>>>> Developer
      }

      ]
    )
  ],
<<<<<<< HEAD
  providers: [AuthService, AngularFireAuth],
  providers: [AngularFirestoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

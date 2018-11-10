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
import {AngularFireAuth} from 'angularfire2/auth'
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { environment } from "../environments/environment";
import { AddUserComponent } from './add-user/add-user.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { CountrySelectComponent } from './country-select/country-select.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserInfoService } from './services/user-info-service.service';

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
    LoginComponent,
    CountrySelectComponent,
    UserProfileComponent,
    AddReviewComponent,
    AddCompanyComponent,
    SignUpComponent
  ],

  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
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
        path: 'addreview',
        component: AddReviewComponent
      },
      {
        path: '',
        component: FrontPageComponent
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'add_user',
        component: AddUserComponent
      },
      {
        path: 'add_company',
        component: AddCompanyComponent
      },
      {
        path: 'sign_up',
        component: SignUpComponent
      }

      ]
    )
  ],
  providers: [AuthService, AngularFireAuth, AngularFirestoreModule, UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

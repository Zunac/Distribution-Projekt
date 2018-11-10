import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FrontPageComponent } from './front-page/front-page.component';
<<<<<<< HEAD
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from "../environments/environment";
import { AddReviewComponent } from './add-review/add-review.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { AppRoutingModule } from './app-routing.module';
=======
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
>>>>>>> LoginTesting

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    NavigationBarComponent,
    FrontPageComponent,
<<<<<<< HEAD
    AddReviewComponent,
    AddCompanyComponent,
    ReviewListComponent
=======
    FooterComponent,
    AddUserComponent,
    LoginComponent,
    CountrySelectComponent,
    UserProfileComponent,
    AddReviewComponent,
    AddCompanyComponent,
    SignUpComponent
>>>>>>> LoginTesting
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
        path: 'reviews',
        component: ReviewListComponent
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
<<<<<<< HEAD
=======
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'add_user',
        component: AddUserComponent
      },
      {
>>>>>>> LoginTesting
        path: 'add_company',
        component: AddCompanyComponent
      },
      {
        path: 'sign_up',
        component: SignUpComponent
      }

      ]
    ),
    AppRoutingModule
  ],
  providers: [AuthService, AngularFireAuth, AngularFirestoreModule, UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
